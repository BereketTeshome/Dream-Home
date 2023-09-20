const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const JWT = require('jsonwebtoken');



const UserSchema = new mongoose.Schema(
    {
        username:{
            type: String,
            required: true,
            unique:false
        },
        email:{
            type: String,
            required: true,
            unique:[true, 'email already exists']
        },
        password:{
            type: String,
            required: true
        },
        confirmPassword:{
            type: String,
            required: true
        },
        isAdmin:{
            type: String,
            default: false
        }
    },
    {timestamps: true}
)

UserSchema.pre('save', async function () {
    this.password = await bcrypt.hash(this.password, 10)
    this.confirmPassword = await bcrypt.hash(this.confirmPassword, 10)
})
UserSchema.methods.comparePassword = function (candidatePassword) {
    const isMatch = bcrypt.compare(candidatePassword, this.password)
    return isMatch
}
UserSchema.methods.createToken = function () {
    return JWT.sign({userID: this._id, username: this.username, isAdmin:this.isAdmin}, process.env.JWT_SECRET, {expiresIn: '30d'})
}


module.exports = mongoose.model("User", UserSchema)
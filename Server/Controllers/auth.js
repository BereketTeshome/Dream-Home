const User = require("../Model/User");

const Login =async (req, res)=>{
    const {username, password, _id} = req.body

    if (!username || !password) {
        return res.json({error: 'Please provide username and password'})
    }
    const user = await User.findOne({username})
    if (!user) {
        return res.json({error: "Invalid username or password!"})
    }
    const compare =await user.comparePassword(password)
    if (!compare) {
        return res.json({error: "Incorrect password!"})
    }
    try {
        const token = user.createToken()
        res.status(201).json({user, token:token})
    } catch (err) {
        res.status(500).json(err)
    }
}

const Register = async (req, res) =>{
    try {
        const user = await User.create(req.body)
        const token = user.createToken()
        res.status(201).json({user, token:token})
    } catch (error) {
        res.status(500).json({error: error.message})
    }
}

const getUsers = async (req, res) =>{
    try {
        const user = await User.find({})
        res.status(200).json({count: user.length, user})
    } catch (error) {
        res.status(500).json({error: error.message})
    }
}

module.exports = {Login, Register, getUsers}

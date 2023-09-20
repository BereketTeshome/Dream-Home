const mongoose = require('mongoose');

const EstateSchema = new mongoose.Schema({
    title:{
        type: String,
    },
    country:{
        type: String,
        index: true
    },
    city:{
        type: String,
    },
    address:{
        type: String,
    },
    image:{
        type: String,
    },
    description:{
        type: String,
    },
    price:{
        type: String,
    },
    bedrooms:{
        type: String,
    },
    parkings:{
        type: String,
    },
    bathrooms:{
        type: String,
    },
    createdBy: {
        type: mongoose.Types.ObjectId,
        ref: 'User'
    }
}, {timestamps: true})

EstateSchema.index({ title: 'text', country: 'text', description:'text', city: 'text', address: 'text'});


module.exports = mongoose.model("estate", EstateSchema)
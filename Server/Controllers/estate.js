const Estate = require("../Model/Estate");

const createEstate = async(req, res)=>{
    try {
        const estate = await Estate.create(req.body)
        res.status(200).json({estate})
        
    } catch (error) {
        res.status(500).json({error: error.message})
    }
}

const getAllEstate = async(req, res)=>{
    try {
        const estate = await Estate.find({})
        res.status(200).json({count: estate.length, estate})
    } catch (error) {
        res.status(500).json({error: error.message})
    }
}

const getLimitedEstate = async(req, res)=>{
    try {
        const estate = await Estate.find({}).limit(4)
        res.status(200).json({count: estate.length, estate})
    } catch (error) {
        res.status(500).json({error: error.message})
    }
}

const getSingleEstate = async(req, res)=>{
    const id = req.params.id
    try {
        const estate = await Estate.findById({_id: id})
        res.status(200).json({estate})
    } catch (error) {
        res.status(500).json({error: error.message})
    }
}

const updateEstate = async(req, res)=>{
    const id = req.params.id
    try {
        const estate = await Estate.findByIdAndUpdate({_id: id}, req.body, {new:true})
        res.status(200).json({estate})
    } catch (error) {
        res.status(500).json({error: error.message})
    }
}

const deleteEstate = async(req, res)=>{
    const id = req.params.id
    try {
        const estate = await Estate.findByIdAndDelete({_id: id})
        res.status(200).json({estate})
    } catch (error) {
        res.status(500).json({error: error.message})
    }
}

const getEstateBySearch = async (req, res) => {
    let searchTerm = req.query.searchTerm
        try {
            const estate = await Estate.find({ $text: {$search: searchTerm, $diacriticSensitive: true } })
            res.status(200).json({count:estate.length, estate})
        } catch (error) {
            res.status(500).json({error: error})
        }
}

module.exports = {createEstate, getAllEstate, getLimitedEstate, getSingleEstate, updateEstate, deleteEstate, getEstateBySearch}
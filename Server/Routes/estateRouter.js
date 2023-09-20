const router = require('express').Router()
const { createEstate, getAllEstate, getLimitedEstate, getSingleEstate, updateEstate, deleteEstate, getEstateBySearch } = require('../Controllers/estate')

router.post('/create', createEstate)
router.get('/get', getAllEstate)
router.get('/getLimited', getLimitedEstate)
router.post('/search', getEstateBySearch)
router.get('/get/:id', getSingleEstate)
router.put('/edit/:id', updateEstate)
router.delete('/delete/:id', deleteEstate)

module.exports = router
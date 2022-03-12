let router = require("express").Router()
let {getCreateJobForm,getAll,createJob,getOne,search,updateOne}= require('../controllers/job')

router.route('/create').get(getCreateJobForm).post(createJob)
router.route('/all').get(getAll)
router.route('/:jobId').get(getOne).put(updateOne)
router.route('/find/search').get(search)

module.exports= router

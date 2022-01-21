import express from "express";
import sampleController from '../controllers/sample'

const router = express.Router()

router.get('/dp', sampleController.sampleHealthCheck)
export = router
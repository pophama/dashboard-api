import express from 'express'
import {
    getInfluencers
} from '../controllers/influencerController.js'

const router = express.Router();


router.route('/').get(getInfluencers);

export default router

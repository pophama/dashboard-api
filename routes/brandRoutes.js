import express from 'express'
import {getBrandByOfferId} from '../controllers/brandController.js'

const router = express.Router();


router.route('/:offerId').get(getBrandByOfferId);

export default router

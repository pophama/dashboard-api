import asyncHandler from 'express-async-handler'
import {onValue, ref, query, equalTo, orderByKey} from 'firebase/database';
import db from "../config/firebase.js";

// @desc    Get brand by offerId
// @route   GET /api/brand/:offerId
const getBrandByOfferId = asyncHandler(async (req, res) => {
    const offerId = req.params.offerId;
    const brandsRef = query(ref(db, 'conversions/purchasesPerBrands'), orderByKey(), equalTo(offerId));

    onValue(brandsRef, (snapshot) => {
        const brand = !!snapshot.val() ? Object.values(snapshot.val())[0] : {};
        res.json(Object.values(brand));
    });
});

export {
    getBrandByOfferId
}

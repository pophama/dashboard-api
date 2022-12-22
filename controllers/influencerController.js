import asyncHandler from 'express-async-handler'
import {onValue, ref} from 'firebase/database';
import db from "../config/firebase.js";

// @desc    Get all influencers
// @route   GET /api/influencers
const getInfluencers = asyncHandler(async (req, res) => {
    const influencersRef = ref(db, 'influencers');
    onValue(influencersRef, (snapshot) => {
        const influencers = Object.values(snapshot.val());
        const result = influencers.map((influencer) => ({
            banner: influencer?.banner,
            name: influencer?.name,
            influencerId: influencer?.influencerId,
            createdAt: influencer?.createdAt
        }));
        res.json(result);
    });
});

export {
    getInfluencers,
}

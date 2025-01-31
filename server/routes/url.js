import express from "express";
import {handleAnalytics, handleGenerateNewShortURL} from "../controllers/url.js";

const router = express.Router()


router.post('/', handleGenerateNewShortURL)

router.get('/analytics/:shortId', handleAnalytics)

export default router;

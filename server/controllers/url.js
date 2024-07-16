import { nanoid } from 'nanoid'
import URL from '../models/url.js'

export async function handleGenerateNewShortURL(req, res){

    const body = req.body;

    console.log(body);

    if (!body.url) {
        return res.status(400).json({ "message" : "url is required" })
    }
    const shortId = nanoid(10)

    const savedUrl = await URL.create({
        shortId : shortId,
        redirectURL : body.url
    })

    console.log(savedUrl);

    return res.status(200).json({ "success" : true, "data" : savedUrl})

}

export async function handleAnalytics(req, res){
    const shortId = req.params.shortId;

    const data = await URL.findOne({shortId});

    res.json({"total clicks" : data.visits.length, "visit times" : data.visits})
}
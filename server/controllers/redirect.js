import URL from "../models/url.js"

export default async function handleRedirect(req, res){
    const shortId = req.params.shortId
    const visit = await URL.findOneAndUpdate({ shortId }, {
        $push : {
            visits : Date.now()
        }
    })
    res.redirect(visit.redirectURL)
}
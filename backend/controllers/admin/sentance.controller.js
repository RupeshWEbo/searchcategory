const { ReE, ReS } = require('../../services/util.service');
var natural = require('natural');



const fetchSentance = async function (req, res) {
    try {
        let body = req.body;
        let tokenizer = new natural.WordTokenizer();
        let splitData = tokenizer.tokenize(body.sentance)
        return ReS(res, { message: splitData }, 200);
    } catch (error) {
        console.log(error)
        return ReE(res, { message: "Somthing Went Wrong", err: error }, 200);
    }
};



module.exports = {
    fetchSentance
};

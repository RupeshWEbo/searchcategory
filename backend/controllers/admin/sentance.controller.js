const { ReE, ReS } = require('../../services/util.service');
var natural = require('natural');
var top = require('top-packages-category-wise');



const fetchSentance = async function (req, res) {
    try {
        let body = req.body;
        let tokenizer = new natural.WordTokenizer();
        let splitData = tokenizer.tokenize(body.sentance)

        fetch('https://dummyjson.com/products/categories')
            .then(res => res.json())
            .then(console.log);

        // top('country',10).then(function (list) {
        //     console.log(list); //[ 'express', 'aws-sdk', 'googleapis', ...]
        // }).catch(function (error) {
        //     console.log(error);
        // });


        return ReS(res, { message: splitData }, 200);
    } catch (error) {
        console.log(error)
        return ReE(res, { message: "Somthing Went Wrong", err: error }, 200);
    }
};



module.exports = {
    fetchSentance
};

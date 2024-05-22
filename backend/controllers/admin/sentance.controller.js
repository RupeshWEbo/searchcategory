const { ReE, ReS } = require('../../services/util.service');
var natural = require('natural');
var top = require('top-packages-category-wise');



const fetchSentance = async function (req, res) {
    try {
        let body = req.body;
        let tokenizer = new natural.WordTokenizer();
        let splitData = tokenizer.tokenize(body.sentance)
        top('sport', 10).then(function (list) {
            let database = list.map((item) => item)
            let checkCat = []
            let checkSubCat = []
            for (let i = 0; i < splitData.length; i++) {
                for (let j = 0; j < list.length; j++) {
                    if (splitData[i] == list[j]) {
                        checkCat = checkCat.concat(splitData[i])
                    }
                }
                if (!checkCat.includes(splitData[i])) {
                    checkSubCat = checkSubCat.concat(splitData[i])
                }
            }
            return ReS(res, { subCat: checkSubCat, record: checkCat }, 200);
        }).catch(function (error) {
            console.log(error);
        });

    } catch (error) {
        console.log(error)
        return ReE(res, { message: "Somthing Went Wrong", err: error }, 200);
    }
};



module.exports = {
    fetchSentance
};

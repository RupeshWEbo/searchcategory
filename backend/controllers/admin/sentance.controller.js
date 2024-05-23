const { ReE, ReS } = require('../../services/util.service');
var natural = require('natural');
var top = require('top-packages-category-wise');
const smartWordGenerator = require("smart-word-generator");
var pos = require('pos');
// const fetchSentance = async function (req, res) {
//     try {
//         let body = req.body;
//         let tokenizer = new natural.WordTokenizer();
//         let splitData = tokenizer.tokenize(body.sentance)
//         top('sport', 10).then(function (list) {
//             let checkCat = []
//             let checkSubCat = []
//             for (let i = 0; i < splitData.length; i++) {
//                 for (let j = 0; j < list.length; j++) {
//                     if (splitData[i] == list[j]) {
//                         checkCat.push(splitData[i])
//                     }
//                 }
//                 if (!checkCat.includes(splitData[i])) {
//                     checkSubCat.push(splitData[i])
//                 }
//             }
//             return ReS(res, { subCat: checkSubCat, record: checkCat }, 200);
//         }).catch(function (error) {
//             console.log(error);
//         });

//     } catch (error) {
//         console.log(error)
//         return ReE(res, { message: "Somthing Went Wrong", err: error }, 200);
//     }
// };

const fetchSentance = async function (req, res) {
    let body = req.body;
    var words = new pos.Lexer().lex(body.sentance);
    var tagger = new pos.Tagger();
    var taggedWords = tagger.tag(words);
    var objectsArray = [];
    let data = [];
    for (i in taggedWords) {
        var taggedWord = taggedWords[i];
        var word = taggedWord[0];
        var tag = taggedWord[1];
        if (tag === "NN") {
            data.push(word)
        }
    }
    for (let i = 0; i < data.length; i++) {
        const response = await smartWordGenerator.generateWordMeansLike(data[i], true, "n");
        objectsArray.push({ "word": data[i], "category": response })
    }
    return ReS(res, { subCat: objectsArray }, 200);
};



module.exports = {
    fetchSentance
};

const path = require('path');
const dirPath = path.join(__dirname, '../views/index.html');

function test(req, res) {
    try {
        res.status(200).json({message: "Success!!"})
    } catch (error) {
        res.json({message: "Error!!", error: error})
    }
}

function getHTML(req, res) {
    try {
        res.status(200).sendFile(dirPath);
    } catch (error) {
        console.error(error);
    }
}

module.exports = {
    test,
    getHTML
}
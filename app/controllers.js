const path = require('path');
const dirPath = path.join(__dirname, '../views/index.html');

const getTimestamp = date => ({
    unix: date.getTime(),
    utc: date.toUTCString()
});

function handleTimestamp(req, res) {
    const string = req.params.string;
    let timestamp;
    try {
        if (string === undefined || string.trim() === '') {
            timestamp = getTimestamp(new Date());
            res.status(200).json(timestamp);
        }
        else {
            const date = !isNaN(string) ? new Date(parseInt(string)) : new Date(string);
            if (!isNaN(date.getTime())) {
                timestamp = getTimestamp(date);
                res.status(200).json(timestamp);
            }
            else {
                timestamp = {
                    message: "Invalid date!"
                }
                res.status(400).json(timestamp);
            }
        }
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
    handleTimestamp,
    getHTML
}
const path = require('path');
const dirPath = path.join(__dirname, '../views/index.html');

const getTimestamp = date => ({
    unix: date.getTime(),
    utc: date.toUTCString()
});

function handleTimestamp(req, res) {
    const date_string = req.params.date;
    let timestamp;
    try {
        if (date_string === undefined || date_string.trim() === '') {
            timestamp = getTimestamp(new Date());
            res.status(200).json(timestamp);
        }
        else {
            const date = !isNaN(date_string) ? new Date(parseInt(date_string)) : new Date(date_string);
            if (!isNaN(date.getTime())) {
                timestamp = getTimestamp(date);
                res.status(200).json(timestamp);
            }
            else {
                timestamp = {
                    error: "Invalid Date"
                }
                res
                .writeHead(200, {"Content-Type": "application/json"})
                .end(JSON.stringify(timestamp));
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
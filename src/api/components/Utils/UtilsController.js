//Ping
exports.ping = (req,res) => {
    res.status(200).json({ result: 'pong'});
};
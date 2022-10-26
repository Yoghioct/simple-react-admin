module.exports = (req, res, next) => {
    res.header('Content-Range', 'product 0-5/5')
    next()
}
const handleError = (res, err) => {
    if (err) {
        console.log(err)
        res.end(JSON.stringify(err))
        return true
    }
    return false
}
// module.exports = handleError
export default handleError


function responseModel(res, code = 200, {status = "OK", message = "Success", data = null}){
    return res.status(code).json({
        status: status,
        message: message,
        data: data,
    });
}

module.exports = responseModel
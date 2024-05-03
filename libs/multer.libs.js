const multer = require("multer")
const path = require("path")



module.exports = {
    image: multer({
        fileFilter: fileFilter(
            [
                'image/png',
                'image/jpg',
            ]
        ),
        // limits:
        onError: (err, next) => {
            next(err);
        }
    })
}
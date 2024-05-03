const multer = require("multer")
const path = require("path")


const fileFilter = (mimetypes) => {
    return (req, file, callback) => {
        const fileSize = parseInt(req.headers["content-length"])

        if (!mimetypes.includes(file.mimetype)) {
            let err = new Error(`Only ${mimetypes} are allowed to upload!`)
            err.statusCode = 400
            callback(err, false);
        } else if (fileSize > 1000000) {
            let err = new Error("filesize must under 1 mb")
            err.statusCode = 400
            callback(err, false)
        } else {
            callback(null, true);
        }

        // const filezeid = parseInt(req.headers['content-length'])
        // if(fileSize > 100000){
        //     const err = new Error("Maximum filesize is 1 MB!!")
        //     callback(err, false)
        // }
    };
};

module.exports = {
    image: multer({
        fileFilter: fileFilter(
            [
                'image/png',
                'image/jpg',
                'image/jpeg',
            ]
        ),

        // not using this method because the return cant customize like status code 
        // limits: {
        //     fileSize: 1000000
        // },
        onError: (err, next) => {
            next(err);
        }
    })
}
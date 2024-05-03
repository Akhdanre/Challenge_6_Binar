const path = require("path")
const imageUploadService = require("../services/image_upload.service")
const imageService = require("../services/image.service")
const responseModel = require("../helper/response.helper")

module.exports = {
    getSingle: async (req, res, next) => {
        let { id } = req.params
        try {
            let response = await imageService.getById(id)
            if (!response) {
                return responseModel(res, 400, {
                    status: "FAILED",
                    message: "Data Not Found",
                })
            }
            return responseModel(res, 200, {
                message: "Get data",
                data: response
            })
        } catch (error) {
            next(error)
        }
    },

    getAll: async (req, res, next) => {
        try {
            let response = await imageService.getAllData()
            return responseModel(res, 200, {
                message: "Get All Data",
                data: response
            })
        } catch (error) {
            next(error)
        }
    },
    add: async (req, res, next) => {

        try {
            const { title, description } = req.body
            let strfile = req.file.buffer.toString("base64")

            if (!title || !description || !strfile) {
                return responseModel(res, 400, {
                    status: "FAILED",
                    message: "Field Can't Empty",
                })
            }

            let { url, fileId } = await imageUploadService.upload(strfile, path.extname(req.file.originalname))

            if (!url || !fileId) {
                return responseModel(res, 400, {
                    status: "FAILED",
                    message: "Upload Image Failed",
                })
            }

            let saveDb = await imageService.create(title, description, fileId, url)

            if (!saveDb) {
                return responseModel(res, 400, {
                    status: "FAILED",
                    message: "Failed upload new image",
                })
            }
            return responseModel(res, 200, {
                message: "Image Uploaded Successfully!",
                data: saveDb
            })
        } catch (error) {
            next(error)
        }
    },
    update: async (req, res, next) => {
        try {
            const { target_id, title, description } = req.body

            if (!title || !description || !target_id) {
                return responseModel(res, 400, {
                    status: "FAILED",
                    message: "Field Cant Empty",
                })
            }
            let oldData = await imageService.getById(target_id)
            if (!oldData) {
                return responseModel(res, 400, {
                    status: "FAILED",
                    message: "Image Data Not Found",
                })

            }
            oldData.title = title
            oldData.description = description
            let newData = await imageService.update(oldData)
            if (!newData) {
                return responseModel(res, 400, {
                    status: "FAILED",
                    message: "Update Image Failed",
                })
            }
            return responseModel(res, 200, {
                message: "Success Update Image Data",
                data: newData
            })
        } catch (error) {
            next(error)
        }
    },
    delete: async (req, res, next) => {
        let { id } = req.params
        try {
            let deleteTarget = await imageService.getById(id)
            if (!deleteTarget) {
                return responseModel(res, 400, {
                    status: "FAILED",
                    message: "Target Data Not Found",
                })
            }
            if (deleteTarget.image_id) {
                await imageUploadService.delete(deleteTarget.image_id)
            }
            await imageService.delete(deleteTarget.id)

            return responseModel(res, 200, {
                message: "Success Delete Image Data",
                
            })
        } catch (error) {
            next(error)
        }
    },


}

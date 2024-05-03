const imageKit = require("../libs/image_kit.libs")

module.exports = {
    upload: async (file, extension) => {
        let result = await imageKit.upload({
            fileName: Date.now() + extension,
            file: file,
        });
        return result
    },
    delete: async (fileId) => {
        return await imageKit.deleteFile(fileId);
    }
}
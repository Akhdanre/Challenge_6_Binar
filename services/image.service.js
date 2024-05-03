
const { PrismaClient } = require("@prisma/client")
const prisma = new PrismaClient()

module.exports = {
    getById: async (id) => {
        let convertedId = Number(id);
        return await prisma.images.findFirst({ where: { id: convertedId } });
    },
    getAllData: async () => {
        return await prisma.images.findMany()
    },
    create: async (title, description, image_id, url) => {
        let newImage = await prisma.images.create({
            data: {
                title,
                description,
                image_id,
                url,
            }
        });
        return newImage
    },

    update: async (data) => {
        return await prisma.images.update({ where: { id: data.id }, data: data })
    },

    delete: async (id) => {
        let convertedId = Number(id);
        return await prisma.images.delete({ where: { id: convertedId } })
    },


}
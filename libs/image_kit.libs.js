var ImageKit = require("imagekit");
const {
    PUBLICKEY,
    PRIVATEKEY,
    URLENDPOINT
} = process.env

module.exports = new ImageKit({
    publicKey: PUBLICKEY,
    privateKey: PRIVATEKEY,
    urlEndpoint: URLENDPOINT
});
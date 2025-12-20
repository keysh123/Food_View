const ImageKit = require("imagekit");

const imageKit = new ImageKit({
  publicKey: process.env.IMAGEKIT_PUBLIC_KEY,
  privateKey: process.env.IMAGEKIT_PRIVATE_KEY,
  urlEndpoint: process.env.IMAGEKIT_URL_ENDPOINT,
});

const uploadFile = async (file, fileName) => {
  try {
    const result = await imageKit.upload({
      file,        // Buffer or base64
      fileName,
    });
    return result;
  } catch (error) {
    console.error("ImageKit Upload Error:", error);
    throw error;
  }
};

module.exports = { uploadFile };

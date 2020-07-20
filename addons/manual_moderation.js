require('dotenv').config();
const cloudinary = require('cloudinary').v2;

cloudinary.uploader.upload('./assets/images/got.jpeg', {
    moderation: 'manual'
  })
  .then(uploadResult => console.log(JSON.stringify(uploadResult, null, 2)))
  .catch(error => console.error(error));
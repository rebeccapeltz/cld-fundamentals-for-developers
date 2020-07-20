require('dotenv').config();
const cloudinary = require('cloudinary').v2;

cloudinary.uploader.upload('./assets/images/baywatch.jpg', {
        moderation: 'aws_rek:female_underwear:0.85:explicit_nudity:0.7:revealing_clothes:ignore'
    })
    .then(uploadResult => console.log(JSON.stringify(uploadResult, null, 2)))
    .catch(error => console.error(error))
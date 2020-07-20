require('dotenv').config();
const cloudinary = require('cloudinary').v2;

cloudinary.uploader.upload('./assets/images/metallica.jpg', {
        detection: 'aws_rek_face',
        auto_tagging: 0.7
    })
    .then(uploadResult => console.log(JSON.stringify(uploadResult, null, 2)))
    .catch(error => console.error(error))
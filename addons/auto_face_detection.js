require('dotenv').config();
const cloudinary = require('cloudinary').v2;

cloudinary.uploader.upload('./assets/images/arya-stark.jpg', {
        detection: 'adv_face',
        public_id: 'arya-stark'
    })
    .then(uploadResult => console.log(JSON.stringify(uploadResult, null, 2)))
    .catch(error => console.error(error))

cloudinary.uploader.upload('./assets/images/sunglasses.png', {
        public_id: 'sunglass'
    })
    .then(uploadResult => console.log(JSON.stringify(uploadResult, null, 2)))
    .catch(error => console.error(error))


    // https://res.cloudinary.com/<cloud_name>/image/upload/fl_region_relative,g_adv_eyes,l_sunglass,w_1.7/arya-stark
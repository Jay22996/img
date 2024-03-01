var add  = require('../Model/adduser')
const cloudinary = require('cloudinary').v2;
       
cloudinary.config({ 
  cloud_name: 'dab0oknke', 
  api_key: '834123158754747', 
  api_secret: 'MGQ1ZEgYJjwUGcpH_SyIx6vT-W8' 
});

exports.adduser = async(req,res) => {

    cloudinary.uploader.upload(req.file.path, function (err, result){
        console.log(result.url)
        
        req.body.image = result.url
        var data = add.create(req.body)
        res.status(200).json({
            status: "user add",
            data
        })
    })

}
var express = require('express');
const { adduser } = require('../controller/usercontroller');
var router = express.Router();
var multer = require('multer');

const storage = multer.diskStorage({
  filename: function (req,file,cb) {
    cb(null, file.originalname)
  }
});
var upload = multer({ storage: storage })



/* GET home page. */
router.post('/',upload.single('image'),adduser)

// router.post('/', function(req, res) {
  // console.log(req.files.foo); // the uploaded file object
// });

module.exports = router;

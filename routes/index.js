var express = require('express');
var router = express.Router();

const Bible = require('../models/biblemodel');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


//Get getBiblequote by object id
router.get('/getBiblebook/:cid', async(req, res) => {
  try{
    const data = await Bible.findById(req.params.cid);
   // res.json(data)

    res.render('biblebook', { articles : data, title: 'Bible' })
}
catch(error){
    res.status(500).json({message: error.message})
}
})


//Get getBiblequote by object id
router.get('/getBiblebookchapter/:cid/:chapterid', async(req, res) => {
  try{
    const data = await Bible.findById(req.params.cid);
    
   // res.json(data)
   console.log(data.chapters[req.params.chapterid-1])

    res.render('biblebookchapter', { articles : data, chapterno: req.params.chapterid, chapterdata : data.chapters[req.params.chapterid-1], title: 'Bible' })
}
catch(error){
    res.status(500).json({message: error.message})
}
})


//Get getBiblequote by object id
router.get('/getBiblebookbyname/:nm', async(req, res) => {
  try{
    const data = await Bible.findById(req.params.nm);
   // res.json(data)

    res.render('biblebook', { articles : data, title: 'Bible' })
}
catch(error){
    res.status(500).json({message: error.message})
}
})


module.exports = router;

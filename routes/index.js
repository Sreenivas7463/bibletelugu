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


//Get getBiblbiik chapter
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

//Get getBiblbiik chapter verse
router.get('/getBiblebookchapterverse/:cid/:chapterid/:vid', async(req, res) => {
  try{
    const data = await Bible.findById(req.params.cid);
    
   // res.json(data)
   //console.log(data.chapters[req.params.chapterid-1])
   console.log(data.chapters[req.params.chapterid-1].verses[req.params.vid-1])

    res.render('biblebookchapterverse', {chapterid: req.params.cid, articles : data, chapterno: req.params.chapterid, verseid: req.params.vid-1, chapterdata : data.chapters[req.params.chapterid-1].verses[req.params.vid-1], title: 'Bible' })
}
catch(error){
    res.status(500).json({message: error.message})
}
})


//Get getBiblequote by object id
router.get('/getBiblebookbyname/:nm', async(req, res) => {
  try{
    const data = await Bible.findOne({ book: { english: req.params.nm } });
   // res.json(data)

    console.log(res.json(data));
    console.log(req.params.nm);

    res.render('biblebook', { articles : data, title: 'Bible' })
}
catch(error){
    res.status(500).json({message: error.message})
}
})


module.exports = router;

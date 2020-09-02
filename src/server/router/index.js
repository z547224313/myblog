const express = require('express')
const tag = require('./tag')
const article = require('./article')
const router = express.Router()



router.post('/addCover',article.addCover)
router.get('/getAllArticle', article.getAllArticle)
router.post('/addMarkImg',article.addMarkImg)
router.get('/getArticleById',article.getArticleById)
router.put('/updateViews',article.updateViews)
router.get('/getArticleByPage', article.getArticleByPage)
router.get('/getAllArticleNumber', article.getAllArticleNumber)
router.get('/getArticleByTag', article.getArticleByTag)
router.get('/getAllArticleByTag', article.getAllArticleByTag)
router.put('/updateLikes', article.updateLikes)

router.get('/getTagById',tag.getTagById)
router.post('/addTag',tag.addTag)
router.get('/getTag',tag.getTag)
router.post('/addArticle',article.addArticle)
module.exports = router

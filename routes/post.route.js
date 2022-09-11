'use strict';

const express = require('express');
const router = express.Router();
const {Post} = require('../models/index');

router.get('/post', getAllPost);
router.get('/post/:id', getOnePost);
router.post('/post', createPost);
router.put('/post/:id', updatePost);
router.delete('/post/:id', deletePost);

async function getAllPost(req, res) {
    let allPosts= await Post.findAll();
    res.status(200).send(allPosts);
}

async function getOnePost(req, res) {
    const id = req.params.id;
    const thePost = await Post.findOne({
        where: {id: id}
    });
    res.status(200).json(thePost)
}

async function createPost(req, res) {
    let newData = req.body;
    let newPost = await Post.create(newData);
    res.status(200).json(newPost);
}

async function updatePost(req, res) {
  const id = req.params.id;
  const newData = req.body;
  
  const thePost = await Post.findOne({where:{id:id}});  
  const updatedPost = await thePost.update(newData);  
  res.status(200).json(updatedPost);

    // const id = req.params.id;
    // const obj = req.body;
    // const updatedPost = await Post.update(obj,{where:{id:postId}})
    // res.status(200).json(updatedPost);
}

async function deletePost(req, res) {
    const id = req.params.id;
    let deletedPost = await Post.destroy({
      where: {id:id}
    });
    res.status(204).json({deletedPost});
}

module.exports = router;
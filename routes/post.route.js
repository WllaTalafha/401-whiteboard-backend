'use strict';

const express = require('express');
const router = express.Router();
const {postCRUD,comments} = require('../models/index');

router.get('/post', getAllPost);
router.get('/post/:id', getOnePost);
router.post('/post', createPost);
router.put('/post/:id', updatePost);
router.delete('/post/:id', deletePost);

async function getAllPost(req, res) {
    let allPosts= await postCRUD.get(null,[comments]);
    res.status(200).send(allPosts);
}

async function getOnePost(req, res) {
    const id = req.params.id;
    const thePost = await postCRUD.get(id,[comments]);
    res.status(200).json(thePost)
}

async function createPost(req, res) {
    let newData = req.body;
    let newPost = await postCRUD.create(newData);
    res.status(201).json(newPost);
}

async function updatePost(req, res) {
  const id = req.params.id;
  const newData = req.body;
  const update = await postCRUD.update(id,newData);
  res.status(202).send(update);
}

async function deletePost(req, res) {
    const id = req.params.id;
    await postCRUD.delete(id);
    res.status(204).end();
}

module.exports = router;
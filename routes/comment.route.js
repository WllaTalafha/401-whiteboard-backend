'use strict';

const express = require('express');
const router = express.Router();
const {commentCRUD,comments} = require('../models/index');

router.post('/comment/:postId', createComment);
router.put('/comment/:id', updateComment);
router.delete('/comment/:id', deleteComment);

async function createComment(req,res) {
    const {postId} = req.params;
    const newData = {
        commentContent: req.body.commentContent,
        commentID: postId
    }   
    await commentCRUD.create(newData);

    let Allcomments = await comments.findAll({where:{commentID:postId}})
    res.status(201).send(Allcomments);  
}

async function updateComment(req, res) {
    const id = req.params.id;
    const newData = req.body;
    const update=await commentCRUD.update(id,newData);
    res.status(202).send(update);
}

async function deleteComment(req, res) {
      const id = req.params.id;
      await commentCRUD.delete(id);
      res.status(204).end();
}

module.exports = router;
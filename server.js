'use strict';

const express = require('express');
const app=express();
const cors = require ('cors');
const {handleNotFoundError}=require('./error-handlers/404');
const {errorHandler}=require('./error-handlers/500');
const postRouter=require('./routes/post.route');

app.use(express.json());
app.use(cors());
app.use(postRouter);

app.get('/',handleMain);
function handleMain(req, res){
    res.status(200).send('hello ♥');
}

function start (port){
    app.listen(port,()=>console.log(`server is running on port ${port}`))
}

app.use(errorHandler);
app.use('*',handleNotFoundError);

module.exports={app,start}
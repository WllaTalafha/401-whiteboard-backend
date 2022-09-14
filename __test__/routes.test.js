'use strict';

const {app} = require('../server');
const supertest = require('supertest');
const req = supertest(app);

describe('testing the CRUD app', () => {

     it('test getting all the posts',async () => {
        let res = await req.get('/post');
        expect(typeof res.body).toEqual('object');
     });


     it('test getting one post',async () => {
        let res = await req.get('/post/1');
        expect(typeof res.body).toEqual('object');
     });


     it('test adding one post',async () => {
        const data = {
            postTitle:"hello",
            postContent: "wlla",
            postStatus: true
        }
        let res = await req.post('/post').send(data);
        expect(typeof res.body).toEqual('object');
        expect(res.statusCode).toBe(201);

     });


     it('test update one post',async () => {
        const data = {
            postTitle:"hello lovely",
            postContent: "wlla",
            postStatus: false
        }
        let res = await req.put('/post/2').send(data);
        expect(typeof res.body).toEqual('object');
        expect(res.statusCode).toBe(202);
     });


     it('test delete one post',async () => {
        let res = await req.delete('/post/6');
        expect(res.statusCode).toBe(204);
     });

     it('test adding one comment', async () => {
      const data = {
         commentContent: 'cat',
         commentID: 2
      }
      let res = await req.post('/comment/2').send(data);
      expect(typeof res.body).toEqual('object');
      expect(res.statusCode).toBe(201);

  })

});
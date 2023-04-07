const request = require('supertest');
const app = require('../app');
const {makeGetRequest, makePostRequest} = require('../clients/httpClient');
require('dotenv').config();

jest.mock('../clients/httpClient')
const comment = {
  id: 5953,
  post_id: 7879,
  name: "11111111",
  email: "emailo@gmail.com",
  body: "here is body"
  }

describe('GET /comments/:id', () => {
    it('should return comment with id', async () => {
        makeGetRequest.mockReturnValue([comment]);
        const res = await request(app).get(`/comments/${comment.post_id}`);
        expect(res.statusCode).toBe(200);
        expect(res.body.length).toBeGreaterThan(0);
        expect(res.body).toStrictEqual([comment]);
        
        expect(makeGetRequest).toHaveBeenCalledTimes(1);
        expect(makeGetRequest).toHaveBeenCalledWith('https://gorest.co.in/public/v2/posts/7879/comments')
    });
});
describe('POST /comments/:id/new', () => {
    it('should add a comment', async () => {
      const comment = {
        post_id: 7879,
        name: 'NAME1',
        email: 'email1@gmail.com',
        body: 'bodybody',
      };
      makePostRequest.mockReturnValue(comment);
      const res = await request(app)
      .post(`/comments/${comment.post_id}/new`)
      .send(comment);
      expect(res.statusCode).toBe(201);
      expect(res.body).toStrictEqual(comment);
  
      expect(makePostRequest).toHaveBeenCalledTimes(1);
      expect(makePostRequest).toHaveBeenCalledWith(
        `https://gorest.co.in/public/v2/posts/${comment.post_id}/comments`,
        'POST',
        comment
      );
    });
  });
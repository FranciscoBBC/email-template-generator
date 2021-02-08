import request from 'supertest';
import app from '../../src/app';

describe('testing mail marketing route', () => {
  it('should return success', async () => {
    await request(app)
      .get('/mailMarketing')
      .then(res => {
        expect(res.status).toEqual(200);
      });
  });
});

import supertest from 'supertest';
import mongoose from 'mongoose';
import app from '../app';

describe('user', () => {
  test('create new user', async () => {
    const response = await supertest(app).post("/users").send({ email: 'test@gmail.com', password: '123456' });
    expect(response.body.status).toEqual('user_created');
    mongoose.connection.db.dropDatabase();
  });
});

import request from 'supertest';

const baseUrl = 'https://rickandmortyapi.com/api/';

// testing API endpoints
describe('R&M API endpoint Get Characters Info', () => {
  it('Must Return a 200 status code', async () => {
    const response = await request(baseUrl)
      .get('/character')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/);
    expect(response.statusCode).toBe(200);
  });
});

describe('R&M API endpoint Get Location By Id', () => {
  it('Must Return a 200 status code', async () => {
    const response = await request(baseUrl)
      .get('/location/1')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/);
    expect(response.statusCode).toBe(200);
  });
});

describe('R&M API endpoint get Episodes/Chapters by Id', () => {
  it('Must Return a 200 status code', async () => {
    const response = await request(baseUrl)
      .get('/episode/1')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/);
    expect(response.statusCode).toBe(200);
  });
});

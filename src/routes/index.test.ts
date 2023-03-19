import request from 'supertest';

import server from '../server';

const RESOURCE_URI = '/';

describe(`RESOURCE_URI`, () => {
  beforeAll(async () => {
    await server.ready();
  });

  function act(token?: string) {
    const req = request(server.server).get(RESOURCE_URI);

    if (token) return req.set('Authorization', `Bearer $\{token}`);

    return req;
  }

  test('it works', async () => {
    const { status } = await act();

    expect(status).toBe(200);
  });
});

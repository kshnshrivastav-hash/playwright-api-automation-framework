import { test, expect } from '../../fixtures/apiFixture';

test('Get users successfully', async ({ usersService }) => {

    const response = await usersService.getUsers();
    expect(response.status()).toBe(200);

    const body = await response.json();
    console.log(body);

    expect(body).toHaveProperty('data');
    expect(Array.isArray(body.data)).toBe(true);
    console.log('DATA:', body.data);
    console.log('LENGTH:', body.data.length);
    expect(body.data.length).toBeGreaterThan(0);

    const firstUser = body.data[0];

    expect(firstUser).toHaveProperty('id');
    expect(firstUser).toHaveProperty('email');
    expect(firstUser).toHaveProperty('first_name');
    expect(firstUser).toHaveProperty('last_name');
});


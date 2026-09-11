import { test, expect } from '../../fixtures/apiFixture';

test('Create user successfully', async ({ usersService }) => {

    const response = await usersService.createUser(
        'Kishan',
        'QA Engineer'
    );

    expect(response.status()).toBe(201);

    const body = await response.json();
    console.log(body);


    expect(body).toHaveProperty('name');
    expect(body).toHaveProperty('job');
    expect(body).toHaveProperty('id');


expect(body.name).toBe('Kishan');
expect(body.job).toBe('QA Engineer');

    
});
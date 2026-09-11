import { test as base } from '@playwright/test';
import { ApiClient } from '../api/apiClient';
import { UsersService } from '../api/services/usersService';

type ApiFixtures = {
    apiClient: ApiClient;
    usersService: UsersService;
};

export const test = base.extend<ApiFixtures>({
    apiClient: async ({ request }, use) => {
        const apiClient = new ApiClient(request);
        await use(apiClient);
    },

    usersService: async ({ apiClient }, use) => {
        const usersService = new UsersService(apiClient);
        await use(usersService);
    },
});

export { expect } from '@playwright/test';
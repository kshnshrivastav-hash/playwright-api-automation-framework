import { APIRequestContext } from '@playwright/test';

export class ApiClient {

    constructor(private request: APIRequestContext) {}

    async get(endpoint: string) {
        return await this.request.get(endpoint);
    }
     
    async post(endpoint: string, data: any) {
    return await this.request.post(endpoint, {
        data
    });
}
}
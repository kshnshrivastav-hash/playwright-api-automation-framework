import { ApiClient } from '../apiClient';

export class UsersService {

    constructor(private apiClient: ApiClient) {}
    async getUsers() {
    return await this.apiClient.get('/api/users');
}

    async createUser(name: string, job: string) {
    return await this.apiClient.post('/api/users', {
        name,
        job
    });
}

}
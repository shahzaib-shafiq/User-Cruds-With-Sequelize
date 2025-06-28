import { Injectable, NotFoundException } from '@nestjs/common';

@Injectable()
export class UsersService {
    private users = [
        { id: 1, name: 'John Doe', email: 'john@example.com' },
        { id: 2, name: 'Jane Smith', email: 'jane@example.com' },
    ];

    findAll() {
        return this.users;
    }
    /**
     * Finds a user by their ID.
     * @param id - The ID of the user to find.
     * @returns The user object if found, otherwise throws a NotFoundException.
     */
    findOne(id: number) {
        const user = this.users.find(user => user.id === id);
        if (!user) {
            throw new NotFoundException(`User with ID ${id} not found`);
        }
        return user;
    }

}
// This service provides a method to retrieve all users.
// You can extend this service with methods to create, update, or delete users as needed.

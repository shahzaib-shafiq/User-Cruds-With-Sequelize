import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
@Injectable()
export class UsersService {
    private users = [
        { id: 1, name: 'John Doe', email: 'john@example.com' },
        { id: 2, name: 'Jane Smith', email: 'jane@example.com' },
        { id: 3, name: 'Jane ', email: 'jane@example.com' },
    ];
    findAll() {
        return this.users;
    }
    findOne(id: number) {
        const user = this.users.find(user => user.id === id);
        if (!user) {
            throw new NotFoundException(`User with ID ${id} not found`);
        }
        return user;
    }
    deleteUser(id: number) {
        const userIndex = this.users.findIndex(user => user.id === id);
        if (userIndex === -1) {
            throw new NotFoundException(`User with ID ${id} not found`);
        }
        this.users.splice(userIndex, 1);
        return { message: `User with ID ${id} deleted successfully` };
    }
    create(userDto: CreateUserDto) {
        const newUser = { id: this.users.length++, ...userDto };
        this.users.push(newUser);
        return newUser;
    }
    updateUser(id: string, data: Partial<{ name: string; email: string }>) {
        const user = this.users.find(u => u.id.toString() === id);
        if (!user) return { message: 'User not found' };
        if (!data) return { message: 'No data provided' };

        if ('name' in data && data.name !== undefined) user.name = data.name;
        if ('email' in data && data.email !== undefined) user.email = data.email;

        return { message: 'User updated', user };
    }

}

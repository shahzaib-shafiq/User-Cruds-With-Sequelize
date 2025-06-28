import { CreateUserDto } from './dto/create-user.dto';
export declare class UsersService {
    private users;
    findAll(): {
        id: number;
        name: string;
        email: string;
    }[];
    findOne(id: number): {
        id: number;
        name: string;
        email: string;
    };
    deleteUser(id: number): {
        message: string;
    };
    create(userDto: CreateUserDto): {
        name: string;
        email: string;
        id: number;
    };
    updateUser(id: string, data: Partial<{
        name: string;
        email: string;
    }>): {
        message: string;
        user?: undefined;
    } | {
        message: string;
        user: {
            id: number;
            name: string;
            email: string;
        };
    };
}

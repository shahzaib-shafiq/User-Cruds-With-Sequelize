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
}

import { Repository } from 'typeorm';
import { User } from './user.entity';
import { CreateUserDto } from './dto/create-user.dto';
export declare class UserService {
    private userRepository;
    constructor(userRepository: Repository<User>);
    create(createUserDto: CreateUserDto): Promise<User>;
    findOne(id: number): Promise<User>;
    findAll(): Promise<User[]>;
    update(id: number, updateData: Partial<User>): Promise<User>;
    delete(id: number): Promise<void>;
}

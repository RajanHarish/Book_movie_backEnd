import { Model } from 'mongoose';
import { User } from '../interfaces/user.interface';
import { CreateUserDto } from '../dto/user.dto';
export declare class UserService {
    private userModel;
    constructor(userModel: Model<User>);
    userCreate(createUserDto: CreateUserDto): Promise<User>;
}

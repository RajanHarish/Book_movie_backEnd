import { UserService } from '../service/user.service';
import { CreateUserDto } from '../dto/user.dto';
export declare class UserController {
    private readonly userService;
    constructor(userService: UserService);
    userRegister(createUserDto: CreateUserDto): Promise<void>;
}

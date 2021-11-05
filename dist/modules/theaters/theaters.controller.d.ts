import { Response } from 'express';
import { TheatersDto } from './theaters.dto';
import { TheatersService } from './theaters.service';
export declare class TheatersController {
    private theaterService;
    constructor(theaterService: TheatersService);
    createTheaters(theatersDto: TheatersDto): Promise<void>;
    getAllTheaters(res: Response): Promise<Response<any>>;
    getTheatersById(res: Response, theaterId: string): Promise<Response<any>>;
    update(res: Response, theaterId: string, theatersDto: TheatersDto): Promise<Response<any>>;
}

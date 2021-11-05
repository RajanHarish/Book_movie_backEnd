import { Model } from 'mongoose';
import { Theaters } from './theaters.interface';
import { TheatersDto } from './theaters.dto';
export declare class TheatersService {
    private theaterModel;
    constructor(theaterModel: Model<Theaters>);
    theaterCreate(theatersDto: TheatersDto): Promise<Theaters>;
    findAllThearers(): Promise<Theaters[]>;
    findThearersById(theaterId: any): Promise<Theaters>;
    UpdateThearer(theaterId: any, theatersDto: any): Promise<any>;
}

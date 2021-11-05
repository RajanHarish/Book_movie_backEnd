"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const theaters_dto_1 = require("./theaters.dto");
const theaters_service_1 = require("./theaters.service");
let TheatersController = class TheatersController {
    constructor(theaterService) {
        this.theaterService = theaterService;
    }
    async createTheaters(theatersDto) {
        await this.theaterService.theaterCreate(theatersDto);
    }
    async getAllTheaters(res) {
        const theaters = await this.theaterService.findAllThearers();
        return res.status(common_1.HttpStatus.OK).json(theaters);
    }
    async getTheatersById(res, theaterId) {
        const theater = await this.theaterService.findThearersById(theaterId);
        return res.status(common_1.HttpStatus.OK).json(theater);
    }
    async update(res, theaterId, theatersDto) {
        const theaters = await this.theaterService.UpdateThearer(theaterId, theatersDto);
        return res.status(common_1.HttpStatus.OK).json(theaters);
    }
};
__decorate([
    common_1.Post(),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [theaters_dto_1.TheatersDto]),
    __metadata("design:returntype", Promise)
], TheatersController.prototype, "createTheaters", null);
__decorate([
    common_1.Get(),
    __param(0, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], TheatersController.prototype, "getAllTheaters", null);
__decorate([
    common_1.Get(':id'),
    __param(0, common_1.Res()), __param(1, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", Promise)
], TheatersController.prototype, "getTheatersById", null);
__decorate([
    common_1.Put(':id'),
    __param(0, common_1.Res()), __param(1, common_1.Param('id')), __param(2, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String, theaters_dto_1.TheatersDto]),
    __metadata("design:returntype", Promise)
], TheatersController.prototype, "update", null);
TheatersController = __decorate([
    common_1.Controller('theaters'),
    __metadata("design:paramtypes", [theaters_service_1.TheatersService])
], TheatersController);
exports.TheatersController = TheatersController;
//# sourceMappingURL=theaters.controller.js.map
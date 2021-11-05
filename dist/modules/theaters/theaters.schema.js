"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
exports.TheatersSchema = new mongoose.Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    poster: { type: String, required: true },
    seats: { type: Array, required: true },
    seatAvaliable: { type: String, required: true }
});
//# sourceMappingURL=theaters.schema.js.map
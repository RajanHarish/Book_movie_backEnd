"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
exports.UserSchema = new mongoose.Schema({
    username: String,
    name: String,
    email: String,
    password: String
});
//# sourceMappingURL=user.schema.js.map
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = __importDefault(require("./index"));
const port = process.env.PORT || 3000;
index_1.default.listen(port, "0.0.0.0", () => {
    console.log("server on");
});
//# sourceMappingURL=server.js.map 
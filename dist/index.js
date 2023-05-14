"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const database_1 = __importDefault(require("./config/database"));
const Task_routes_1 = __importDefault(require("./routes/Task.routes"));
const User_routes_1 = __importDefault(require("./routes/User.routes"));
const cors_1 = __importDefault(require("cors"));
const app = (0, express_1.default)();
// Middlewares
app.use((0, cors_1.default)({}));
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: false }));
// Routes
app.use("/task", Task_routes_1.default);
app.use("/user", User_routes_1.default);
/*app.use("/Category", CategoryRouter)*/
// inicializa la base de datos
database_1.default.initialize()
    .then(() => {
    console.log("base de datos conectada");
});
app.get('/', (req, res) => {
    res.send('Hola, mundo!');
});
app.post("/tasks", (req, res) => {
    res.send(req.body);
});
exports.default = app;
//# sourceMappingURL=index.js.map
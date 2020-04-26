"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
require('dotenv').config();
const express_1 = __importDefault(require("express"));
const helmet_1 = __importDefault(require("helmet"));
const body_parser_1 = __importDefault(require("body-parser"));
const cors_1 = __importDefault(require("cors"));
const db_1 = __importStar(require("./db"));
const routes_1 = require("./routes");
db_1.default();
const app = express_1.default();
const PORT = process.env.PORT || 3000;
app.use(cors_1.default());
app.use(helmet_1.default());
app.use(body_parser_1.default.json());
db_1.mongoose.set('debug', true);
app.use('/auth', routes_1.logInRouter);
app.get('/ping', (req, res) => {
    res.json({
        body: 'pong',
    });
});
app.listen(PORT, () => {
    console.log(`Teachme app listening on port ${PORT}!`);
});

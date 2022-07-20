"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const client_1 = require("react-dom/client");
require("./styles.css");
function sum(a, b) {
    return a + b;
}
function primeiroJSX() {
    return (react_1.default.createElement("div", { className: "teste" },
        react_1.default.createElement("h1", null, "Lucas Santos - Introdu\u00E7\u00E3o e configura\u00E7\u00E3o do ReactJS."),
        "Soma: ",
        sum(10, 20)));
}
const App = () => {
    return (react_1.default.createElement("div", { className: "App" }, primeiroJSX()));
};
const rootElement = document.getElementById("root");
const root = ((0, client_1.createRoot)(rootElement));
root.render(react_1.default.createElement(App, null));

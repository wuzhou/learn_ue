"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const puerts_1 = require("puerts");
const Application_1 = require("./Application");
console.log("------------------------0----------------------------");
console.log("Hello World!!!!");
const app = Application_1.Application.GetInstance();
let tsInstance = puerts_1.argv.getByName("GameInstance");
app.Init(tsInstance);
tsInstance.LoadUI.Bind((inUIName) => {
    app.LoadUI(inUIName);
});
//# sourceMappingURL=QuickStart.js.map
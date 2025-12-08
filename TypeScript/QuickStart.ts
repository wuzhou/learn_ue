import * as UE from 'ue'
import { argv } from 'puerts';

import { Application } from './Application';


console.log("------------------------0----------------------------");
console.log("Hello World!!!!")

const app = Application.GetInstance();
let tsInstance = argv.getByName("GameInstance") as UE.TsGameInstance;
app.Init(tsInstance);

tsInstance.LoadUI.Bind((inUIName)=>{
    app.LoadUI(inUIName);
});

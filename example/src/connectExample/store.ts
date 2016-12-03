import { createStore } from "redux";
import { Counter } from "./reducer";


export var store = createStore(Counter);
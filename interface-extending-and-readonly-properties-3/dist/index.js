"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var person_1 = __importDefault(require("./person"));
var person = new person_1.default("kunal", 30);
console.log("person => ", person);
person.greet();

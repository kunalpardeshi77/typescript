"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var department_1 = __importDefault(require("./department"));
var dept = new department_1.default("IT");
dept.showDept();
var deptCopy = { showDeptCopy: dept.showDept };
deptCopy.showDeptCopy();

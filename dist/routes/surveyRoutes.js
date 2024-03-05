"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const surveyController_1 = __importDefault(require("../controllers/surveyController"));
const surveyRoutes = (0, express_1.Router)();
surveyRoutes.get("/", surveyController_1.default.getAllSurveys);
surveyRoutes.post("/", surveyController_1.default.createSurvey);
exports.default = surveyRoutes;

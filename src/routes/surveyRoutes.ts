import { Router } from "express";
import SurveyController from "../controllers/surveyController";

const surveyRoutes = Router();

surveyRoutes.get("/", SurveyController.getAllSurveys);
surveyRoutes.post("/", SurveyController.createSurvey);
surveyRoutes.get("/:id", SurveyController.getSurveyById);
surveyRoutes.put("/:id", SurveyController.updateSurvey);
surveyRoutes.delete("/:id", SurveyController.deleteSurvey);

export default surveyRoutes;

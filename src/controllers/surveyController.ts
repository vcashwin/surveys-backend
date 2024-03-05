import { Request, Response } from "express";
import SurveyModel from "../models/surveyModel";

class SurveyController {
  async getAllSurveys(req: Request, res: Response) {
    try {
      const surveys = await SurveyModel.getAllSurveys();
      res.status(200).json(surveys);
    } catch (error: any) {
      res.status(500).json({ error: error.message });
    }
  }

  async createSurvey(req: Request, res: Response) {
    try {
      const survey = await SurveyModel.createSurvey(req.body);
      res.status(201).json(survey);
    } catch (error: any) {
      res.status(500).json({ error: error.message });
    }
  }

  async getSurveyById(req: Request, res: Response) {
    try {
      const survey = await SurveyModel.getSurveyById(Number(req.params.id));
      res.status(200).json(survey);
    } catch (error: any) {
      res.status(500).json({ error: error.message });
    }
  }

  async updateSurvey(req: Request, res: Response) {
    try {
      const survey = await SurveyModel.updateSurvey(
        Number(req.params.id),
        req.body
      );
      res.status(200).json(survey);
    } catch (error: any) {
      res.status(500).json({ error: error.message });
    }
  }

  async deleteSurvey(req: Request, res: Response) {
    try {
      await SurveyModel.deleteSurvey(Number(req.params.id));
      res.status(204).end();
    } catch (error: any) {
      res.status(500).json({ error: error.message });
    }
  }
}

export default new SurveyController();

import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

class SurveyModel {
  static async createSurvey(data: any) {
    return await prisma.surveys.create({
      data: {
        title: data.title,
        questions: {
          create: data.questions.map((question: any) => ({
            text: question.text,
            options: {
              create: question.options.map((option: any) => ({
                text: option.text,
              })),
            },
          })),
        },
      },
    });
  }

  static async getSurveyById(id: number) {
    return await prisma.surveys.findUnique({ where: { id } });
  }

  static async getAllSurveys() {
    return await prisma.surveys.findMany({
      include: {
        questions: {
          include: {
            options: true,
          },
        },
      },
    });
  }

  static async updateSurvey(id: number, data: any) {
    return await prisma.surveys.update({ where: { id }, data });
  }

  static async deleteSurvey(id: number) {
    return await prisma.surveys.delete({ where: { id } });
  }
}

export default SurveyModel;

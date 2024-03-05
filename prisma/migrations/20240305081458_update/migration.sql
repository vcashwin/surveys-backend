/*
  Warnings:

  - You are about to drop the column `option` on the `Options` table. All the data in the column will be lost.
  - You are about to drop the column `question` on the `Questions` table. All the data in the column will be lost.
  - You are about to drop the `UserSurveys` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Users` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `text` to the `Options` table without a default value. This is not possible if the table is not empty.
  - Added the required column `votes` to the `Options` table without a default value. This is not possible if the table is not empty.
  - Added the required column `text` to the `Questions` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "UserSurveys" DROP CONSTRAINT "UserSurveys_survey_id_fkey";

-- DropForeignKey
ALTER TABLE "UserSurveys" DROP CONSTRAINT "UserSurveys_user_id_fkey";

-- AlterTable
ALTER TABLE "Options" DROP COLUMN "option",
ADD COLUMN     "text" TEXT NOT NULL,
ADD COLUMN     "votes" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "Questions" DROP COLUMN "question",
ADD COLUMN     "text" TEXT NOT NULL;

-- DropTable
DROP TABLE "UserSurveys";

-- DropTable
DROP TABLE "Users";

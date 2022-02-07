/*
  Warnings:

  - You are about to drop the column `date` on the `TodayTalk` table. All the data in the column will be lost.
  - Added the required column `deadLine` to the `TodayTalkContainer` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "TodayTalk" DROP COLUMN "date";

-- AlterTable
ALTER TABLE "TodayTalkContainer" ADD COLUMN     "deadLine" TIMESTAMP(3) NOT NULL;

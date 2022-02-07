/*
  Warnings:

  - Added the required column `deadLine` to the `TodayTalk` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "TodayTalk" ADD COLUMN     "deadLine" TIMESTAMP(3) NOT NULL;

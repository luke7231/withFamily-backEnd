/*
  Warnings:

  - Added the required column `file` to the `FamilyCode` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "FamilyCode" ADD COLUMN     "file" TEXT NOT NULL;

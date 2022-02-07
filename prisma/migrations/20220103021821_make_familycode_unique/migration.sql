/*
  Warnings:

  - A unique constraint covering the columns `[code]` on the table `FamilyCode` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "FamilyCode_code_key" ON "FamilyCode"("code");

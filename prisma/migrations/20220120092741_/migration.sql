/*
  Warnings:

  - You are about to drop the column `file` on the `FamilyCode` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "FamilyCode" DROP COLUMN "file";

-- AlterTable
ALTER TABLE "Photo" ADD COLUMN     "familyCodeId" INTEGER;

-- AddForeignKey
ALTER TABLE "Photo" ADD CONSTRAINT "Photo_familyCodeId_fkey" FOREIGN KEY ("familyCodeId") REFERENCES "FamilyCode"("id") ON DELETE SET NULL ON UPDATE CASCADE;

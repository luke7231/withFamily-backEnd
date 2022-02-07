/*
  Warnings:

  - The `day1` column on the `FamilyCode` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `day2` column on the `FamilyCode` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `day3` column on the `FamilyCode` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "FamilyCode" DROP COLUMN "day1",
ADD COLUMN     "day1" TIMESTAMP(3),
DROP COLUMN "day2",
ADD COLUMN     "day2" TIMESTAMP(3),
DROP COLUMN "day3",
ADD COLUMN     "day3" TIMESTAMP(3);

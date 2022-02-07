/*
  Warnings:

  - You are about to drop the `Gahoon` table. If the table is not empty, all the data it contains will be lost.
  - Made the column `userId` on table `User` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE "Gahoon" DROP CONSTRAINT "Gahoon_familyCodeId_fkey";

-- DropForeignKey
ALTER TABLE "Gahoon" DROP CONSTRAINT "Gahoon_userId_fkey";

-- AlterTable
ALTER TABLE "User" ALTER COLUMN "userId" SET NOT NULL;

-- DropTable
DROP TABLE "Gahoon";

-- CreateTable
CREATE TABLE "TodayTalk" (
    "id" SERIAL NOT NULL,
    "payload" TEXT NOT NULL,
    "file" TEXT,
    "familyCodeId" INTEGER,
    "userId" INTEGER NOT NULL,

    CONSTRAINT "TodayTalk_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "TodayTalk" ADD CONSTRAINT "TodayTalk_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TodayTalk" ADD CONSTRAINT "TodayTalk_familyCodeId_fkey" FOREIGN KEY ("familyCodeId") REFERENCES "FamilyCode"("id") ON DELETE SET NULL ON UPDATE CASCADE;

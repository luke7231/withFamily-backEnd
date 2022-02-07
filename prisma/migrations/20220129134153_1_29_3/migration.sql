/*
  Warnings:

  - You are about to drop the `_SubscribeRelation` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "_SubscribeRelation" DROP CONSTRAINT "_SubscribeRelation_A_fkey";

-- DropForeignKey
ALTER TABLE "_SubscribeRelation" DROP CONSTRAINT "_SubscribeRelation_B_fkey";

-- AlterTable
ALTER TABLE "QuestionList" ALTER COLUMN "file" DROP NOT NULL;

-- AlterTable
ALTER TABLE "TodayTalk" ADD COLUMN     "todayTalkContainerId" INTEGER;

-- DropTable
DROP TABLE "_SubscribeRelation";

-- CreateTable
CREATE TABLE "TodayTalkContainer" (
    "id" SERIAL NOT NULL,
    "familyCodeId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "TodayTalkContainer_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "TodayTalkContainer" ADD CONSTRAINT "TodayTalkContainer_familyCodeId_fkey" FOREIGN KEY ("familyCodeId") REFERENCES "FamilyCode"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TodayTalk" ADD CONSTRAINT "TodayTalk_todayTalkContainerId_fkey" FOREIGN KEY ("todayTalkContainerId") REFERENCES "TodayTalkContainer"("id") ON DELETE SET NULL ON UPDATE CASCADE;

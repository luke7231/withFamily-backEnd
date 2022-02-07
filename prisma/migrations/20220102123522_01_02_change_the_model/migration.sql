/*
  Warnings:

  - You are about to drop the column `photoId` on the `Answer` table. All the data in the column will be lost.
  - You are about to drop the column `photoId` on the `Comment` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Answer" DROP CONSTRAINT "Answer_photoId_fkey";

-- DropForeignKey
ALTER TABLE "Comment" DROP CONSTRAINT "Comment_photoId_fkey";

-- AlterTable
ALTER TABLE "Answer" DROP COLUMN "photoId",
ADD COLUMN     "file" TEXT,
ALTER COLUMN "payload" DROP NOT NULL;

-- AlterTable
ALTER TABLE "Comment" DROP COLUMN "photoId",
ADD COLUMN     "file" TEXT;

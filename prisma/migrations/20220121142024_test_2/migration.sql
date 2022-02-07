/*
  Warnings:

  - The `payload` column on the `Comment` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - You are about to drop the column `promiseId` on the `Photo` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Photo" DROP CONSTRAINT "Photo_promiseId_fkey";

-- AlterTable
ALTER TABLE "Comment" DROP COLUMN "payload",
ADD COLUMN     "payload" TEXT[];

-- AlterTable
ALTER TABLE "Photo" DROP COLUMN "promiseId";

-- AlterTable
ALTER TABLE "Promise" ADD COLUMN     "file" TEXT;

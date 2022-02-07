/*
  Warnings:

  - You are about to drop the column `open` on the `Project` table. All the data in the column will be lost.
  - Added the required column `public` to the `Project` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Project" DROP COLUMN "open",
ADD COLUMN     "public" BOOLEAN NOT NULL;

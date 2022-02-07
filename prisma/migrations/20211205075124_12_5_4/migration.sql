/*
  Warnings:

  - You are about to drop the column `public` on the `Project` table. All the data in the column will be lost.
  - Added the required column `openess` to the `Project` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Project" DROP COLUMN "public",
ADD COLUMN     "openess" BOOLEAN NOT NULL;

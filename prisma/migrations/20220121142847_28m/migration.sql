-- DropForeignKey
ALTER TABLE "Promise" DROP CONSTRAINT "Promise_familyCodeId_fkey";

-- DropForeignKey
ALTER TABLE "Promise" DROP CONSTRAINT "Promise_userId_fkey";

-- AlterTable
ALTER TABLE "Photo" ADD COLUMN     "promiseId" INTEGER;

-- AlterTable
ALTER TABLE "Promise" ALTER COLUMN "familyCodeId" DROP NOT NULL,
ALTER COLUMN "userId" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "Promise" ADD CONSTRAINT "Promise_familyCodeId_fkey" FOREIGN KEY ("familyCodeId") REFERENCES "FamilyCode"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Promise" ADD CONSTRAINT "Promise_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Photo" ADD CONSTRAINT "Photo_promiseId_fkey" FOREIGN KEY ("promiseId") REFERENCES "Promise"("id") ON DELETE SET NULL ON UPDATE CASCADE;

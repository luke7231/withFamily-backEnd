-- AlterTable
ALTER TABLE "Photo" ADD COLUMN     "promiseId" INTEGER;

-- CreateTable
CREATE TABLE "Promise" (
    "id" SERIAL NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,
    "title" TEXT NOT NULL,
    "familyCodeId" INTEGER NOT NULL,
    "userId" INTEGER NOT NULL,

    CONSTRAINT "Promise_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Promise" ADD CONSTRAINT "Promise_familyCodeId_fkey" FOREIGN KEY ("familyCodeId") REFERENCES "FamilyCode"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Promise" ADD CONSTRAINT "Promise_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Photo" ADD CONSTRAINT "Photo_promiseId_fkey" FOREIGN KEY ("promiseId") REFERENCES "Promise"("id") ON DELETE SET NULL ON UPDATE CASCADE;

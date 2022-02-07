-- AlterTable
ALTER TABLE "FamilyCode" ADD COLUMN     "questions" TEXT[];

-- AlterTable
ALTER TABLE "Question" ADD COLUMN     "familyCodeId" INTEGER,
ADD COLUMN     "file" TEXT;

-- CreateTable
CREATE TABLE "QuestionList" (
    "id" SERIAL NOT NULL,
    "payloads" TEXT NOT NULL,
    "file" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "QuestionList_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Question" ADD CONSTRAINT "Question_familyCodeId_fkey" FOREIGN KEY ("familyCodeId") REFERENCES "FamilyCode"("id") ON DELETE SET NULL ON UPDATE CASCADE;

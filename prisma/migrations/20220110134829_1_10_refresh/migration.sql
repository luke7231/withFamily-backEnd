-- CreateTable
CREATE TABLE "Gahoon" (
    "id" SERIAL NOT NULL,
    "payload" TEXT NOT NULL,
    "familyCodeId" INTEGER,
    "userId" INTEGER NOT NULL,

    CONSTRAINT "Gahoon_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Gahoon" ADD CONSTRAINT "Gahoon_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Gahoon" ADD CONSTRAINT "Gahoon_familyCodeId_fkey" FOREIGN KEY ("familyCodeId") REFERENCES "FamilyCode"("id") ON DELETE SET NULL ON UPDATE CASCADE;

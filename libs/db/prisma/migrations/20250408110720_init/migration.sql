-- AlterTable
ALTER TABLE "Movie" ADD COLUMN     "coverFileId" INTEGER,
ALTER COLUMN "id" SET DEFAULT public.uuid_generate_v4();

-- AddForeignKey
ALTER TABLE "Movie" ADD CONSTRAINT "Movie_coverFileId_fkey" FOREIGN KEY ("coverFileId") REFERENCES "File"("id") ON DELETE SET NULL ON UPDATE CASCADE;

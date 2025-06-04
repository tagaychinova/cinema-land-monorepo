/*
  Warnings:

  - You are about to drop the column `genre` on the `Movie` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Movie" DROP COLUMN "genre",
ADD COLUMN     "genres" TEXT[],
ALTER COLUMN "id" SET DEFAULT public.uuid_generate_v4();

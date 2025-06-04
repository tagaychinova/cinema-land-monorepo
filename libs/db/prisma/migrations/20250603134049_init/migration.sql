-- AlterTable
ALTER TABLE "Movie" ALTER COLUMN "id" SET DEFAULT public.uuid_generate_v4();

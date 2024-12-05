-- CreateExtension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- CreateTable
CREATE TABLE "movies" (
    "id" UUID NOT NULL DEFAULT public.uuid_generate_v4(),
    "title" TEXT NOT NULL,
    "genre" TEXT NOT NULL,
    "yearOfIssue" INTEGER NOT NULL,

    CONSTRAINT "movies_pkey" PRIMARY KEY ("id")
);

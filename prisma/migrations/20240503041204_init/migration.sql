-- CreateTable
CREATE TABLE "Images" (
    "id" SERIAL NOT NULL,
    "title" VARCHAR(100) NOT NULL,
    "description" VARCHAR(100) NOT NULL,
    "url" VARCHAR(100) NOT NULL,

    CONSTRAINT "Images_pkey" PRIMARY KEY ("id")
);

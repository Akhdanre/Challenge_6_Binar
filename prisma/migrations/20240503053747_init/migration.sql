/*
  Warnings:

  - Added the required column `image_id` to the `Images` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Images" ADD COLUMN     "image_id" VARCHAR(100) NOT NULL;

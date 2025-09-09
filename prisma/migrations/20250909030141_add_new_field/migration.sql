/*
  Warnings:

  - Added the required column `distance_km` to the `trainning_session` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "trainning_session" ADD COLUMN     "distance_km" DECIMAL(5,2) NOT NULL;

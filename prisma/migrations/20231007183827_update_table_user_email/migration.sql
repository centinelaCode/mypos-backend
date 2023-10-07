/*
  Warnings:

  - Made the column `email` on table `Usuario` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE `Usuario` MODIFY `email` VARCHAR(50) NOT NULL;

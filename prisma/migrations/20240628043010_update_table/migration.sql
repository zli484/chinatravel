/*
  Warnings:

  - The primary key for the `cities` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `id` column on the `cities` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The primary key for the `foods` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `id` column on the `foods` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - A unique constraint covering the columns `[cuid]` on the table `cities` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[cuid]` on the table `foods` will be added. If there are existing duplicate values, this will fail.
  - The required column `cuid` was added to the `cities` table with a prisma-level default value. This is not possible if the table is not empty. Please add this column as optional, then populate it before making it required.
  - The required column `cuid` was added to the `foods` table with a prisma-level default value. This is not possible if the table is not empty. Please add this column as optional, then populate it before making it required.

*/
-- AlterTable
ALTER TABLE "cities" DROP CONSTRAINT "cities_pkey",
ADD COLUMN     "cuid" TEXT NOT NULL,
DROP COLUMN "id",
ADD COLUMN     "id" SERIAL NOT NULL,
ADD CONSTRAINT "cities_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "foods" DROP CONSTRAINT "foods_pkey",
ADD COLUMN     "cuid" TEXT NOT NULL,
DROP COLUMN "id",
ADD COLUMN     "id" SERIAL NOT NULL,
ADD CONSTRAINT "foods_pkey" PRIMARY KEY ("id");

-- CreateIndex
CREATE UNIQUE INDEX "cities_cuid_key" ON "cities"("cuid");

-- CreateIndex
CREATE UNIQUE INDEX "foods_cuid_key" ON "foods"("cuid");

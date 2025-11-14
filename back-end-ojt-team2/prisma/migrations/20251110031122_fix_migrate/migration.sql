/*
  Warnings:

  - You are about to drop the column `id_kategori` on the `data_pelatihan` table. All the data in the column will be lost.
  - You are about to drop the column `id_pelatihan` on the `jadwal_pelatihan` table. All the data in the column will be lost.
  - You are about to drop the column `id_pelatihan` on the `peserta` table. All the data in the column will be lost.
  - Added the required column `nama_kategori` to the `data_pelatihan` table without a default value. This is not possible if the table is not empty.
  - Added the required column `nama_pelatihan` to the `jadwal_pelatihan` table without a default value. This is not possible if the table is not empty.
  - Added the required column `nama_pelatihan` to the `peserta` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `data_pelatihan` DROP FOREIGN KEY `data_pelatihan_id_kategori_fkey`;

-- DropForeignKey
ALTER TABLE `jadwal_pelatihan` DROP FOREIGN KEY `jadwal_pelatihan_id_pelatihan_fkey`;

-- DropForeignKey
ALTER TABLE `peserta` DROP FOREIGN KEY `peserta_id_pelatihan_fkey`;

-- DropIndex
DROP INDEX `data_pelatihan_id_kategori_fkey` ON `data_pelatihan`;

-- DropIndex
DROP INDEX `jadwal_pelatihan_id_pelatihan_fkey` ON `jadwal_pelatihan`;

-- DropIndex
DROP INDEX `peserta_id_pelatihan_fkey` ON `peserta`;

-- AlterTable
ALTER TABLE `data_pelatihan` DROP COLUMN `id_kategori`,
    ADD COLUMN `nama_kategori` VARCHAR(191) NOT NULL,
    MODIFY `nama_pelatihan` VARCHAR(191) NULL;

-- AlterTable
ALTER TABLE `jadwal_pelatihan` DROP COLUMN `id_pelatihan`,
    ADD COLUMN `nama_pelatihan` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `peserta` DROP COLUMN `id_pelatihan`,
    ADD COLUMN `nama_pelatihan` VARCHAR(191) NOT NULL;

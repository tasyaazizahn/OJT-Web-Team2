/*
  Warnings:

  - The primary key for the `jadwal_pelatihan` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `biaya` on the `jadwal_pelatihan` table. All the data in the column will be lost.
  - You are about to drop the column `id_jadwal` on the `jadwal_pelatihan` table. All the data in the column will be lost.
  - You are about to drop the column `jml_hari` on the `jadwal_pelatihan` table. All the data in the column will be lost.
  - You are about to drop the column `nama_pelatihan` on the `jadwal_pelatihan` table. All the data in the column will be lost.
  - You are about to drop the column `tgl` on the `jadwal_pelatihan` table. All the data in the column will be lost.
  - You are about to drop the `login` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `bidang` to the `jadwal_pelatihan` table without a default value. This is not possible if the table is not empty.
  - Added the required column `harga` to the `jadwal_pelatihan` table without a default value. This is not possible if the table is not empty.
  - Added the required column `id` to the `jadwal_pelatihan` table without a default value. This is not possible if the table is not empty.
  - Added the required column `jmlHari` to the `jadwal_pelatihan` table without a default value. This is not possible if the table is not empty.
  - Added the required column `nama` to the `jadwal_pelatihan` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `jadwal_pelatihan` DROP PRIMARY KEY,
    DROP COLUMN `biaya`,
    DROP COLUMN `id_jadwal`,
    DROP COLUMN `jml_hari`,
    DROP COLUMN `nama_pelatihan`,
    DROP COLUMN `tgl`,
    ADD COLUMN `bidang` VARCHAR(191) NOT NULL,
    ADD COLUMN `harga` INTEGER NOT NULL,
    ADD COLUMN `id` INTEGER NOT NULL AUTO_INCREMENT,
    ADD COLUMN `jmlHari` INTEGER NOT NULL,
    ADD COLUMN `nama` VARCHAR(191) NOT NULL,
    ADD COLUMN `tanggal` VARCHAR(191) NULL,
    MODIFY `bulan` VARCHAR(191) NULL,
    ADD PRIMARY KEY (`id`);

-- DropTable
DROP TABLE `login`;

-- CreateTable
CREATE TABLE `Admin` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `username` VARCHAR(191) NOT NULL,
    `password` VARCHAR(191) NOT NULL,
    `role` VARCHAR(191) NOT NULL DEFAULT 'admin',
    `akses` BOOLEAN NOT NULL DEFAULT false,

    UNIQUE INDEX `Admin_username_key`(`username`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

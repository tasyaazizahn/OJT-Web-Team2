/*
  Warnings:

  - Added the required column `id_kategori` to the `data_pelatihan` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `data_pelatihan` ADD COLUMN `id_kategori` INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE `data_pelatihan` ADD CONSTRAINT `data_pelatihan_id_kategori_fkey` FOREIGN KEY (`id_kategori`) REFERENCES `kategori_pelatihan`(`id_kategori`) ON DELETE RESTRICT ON UPDATE CASCADE;

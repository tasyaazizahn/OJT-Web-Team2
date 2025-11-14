-- CreateTable
CREATE TABLE `kategori_pelatihan` (
    `id_kategori` INTEGER NOT NULL AUTO_INCREMENT,
    `nama_kategori` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id_kategori`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `data_pelatihan` (
    `id_pelatihan` INTEGER NOT NULL AUTO_INCREMENT,
    `nama_pelatihan` VARCHAR(191) NOT NULL,
    `tujuan` VARCHAR(191) NOT NULL,
    `persyaratan` VARCHAR(191) NOT NULL,
    `materi_pembelajaran` VARCHAR(191) NOT NULL,
    `instruktur` VARCHAR(191) NOT NULL,
    `sertifikasi` VARCHAR(191) NOT NULL,
    `metode_pembelajaran` VARCHAR(191) NOT NULL,
    `biaya` VARCHAR(191) NOT NULL,
    `fasilitas` VARCHAR(191) NOT NULL,
    `contact` VARCHAR(191) NOT NULL,
    `id_kategori` INTEGER NULL,

    PRIMARY KEY (`id_pelatihan`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `jadwal_pelatihan` (
    `id_jadwal` INTEGER NOT NULL AUTO_INCREMENT,
    `biaya` INTEGER NOT NULL,
    `jml_hari` INTEGER NOT NULL,
    `bulan` VARCHAR(191) NOT NULL,
    `tgl` VARCHAR(191) NOT NULL,
    `id_pelatihan` INTEGER NULL,

    PRIMARY KEY (`id_jadwal`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `peserta` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `institusi` VARCHAR(191) NOT NULL,
    `alamat` VARCHAR(191) NOT NULL,
    `no_telp` INTEGER NOT NULL,
    `fax` INTEGER NOT NULL,
    `email` VARCHAR(191) NOT NULL,
    `nama_peserta` VARCHAR(191) NOT NULL,
    `telp_peserta` INTEGER NOT NULL,
    `email_peserta` VARCHAR(191) NOT NULL,
    `id_pelatihan` INTEGER NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `login` (
    `id_login` INTEGER NOT NULL AUTO_INCREMENT,
    `username` VARCHAR(191) NOT NULL,
    `password` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id_login`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `data_pelatihan` ADD CONSTRAINT `data_pelatihan_id_kategori_fkey` FOREIGN KEY (`id_kategori`) REFERENCES `kategori_pelatihan`(`id_kategori`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `jadwal_pelatihan` ADD CONSTRAINT `jadwal_pelatihan_id_pelatihan_fkey` FOREIGN KEY (`id_pelatihan`) REFERENCES `data_pelatihan`(`id_pelatihan`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `peserta` ADD CONSTRAINT `peserta_id_pelatihan_fkey` FOREIGN KEY (`id_pelatihan`) REFERENCES `data_pelatihan`(`id_pelatihan`) ON DELETE SET NULL ON UPDATE CASCADE;

-- CreateTable
CREATE TABLE `Categoria` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nombre` VARCHAR(50) NOT NULL,
    `descripcion` VARCHAR(256) NULL,
    `activo` BOOLEAN NOT NULL DEFAULT true,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    UNIQUE INDEX `Categoria_nombre_key`(`nombre`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Articulo` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `categoriaId` INTEGER NOT NULL,
    `codigo` VARCHAR(50) NULL,
    `nombre` VARCHAR(100) NOT NULL,
    `stock` INTEGER NOT NULL,
    `descripcion` VARCHAR(256) NULL,
    `imagen` VARCHAR(50) NULL,
    `activo` BOOLEAN NOT NULL DEFAULT true,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    UNIQUE INDEX `Articulo_nombre_key`(`nombre`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Persona` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `tipo_persona` VARCHAR(20) NOT NULL,
    `nombre` VARCHAR(100) NOT NULL,
    `tipo_documento` VARCHAR(20) NULL,
    `num_documento` VARCHAR(20) NULL,
    `direccion` VARCHAR(70) NULL,
    `telefono` VARCHAR(20) NULL,
    `email` VARCHAR(50) NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Usuario` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nombre` VARCHAR(100) NOT NULL,
    `email` VARCHAR(50) NULL,
    `password` VARCHAR(256) NOT NULL,
    `token` VARCHAR(256) NULL,
    `telefono` VARCHAR(20) NULL,
    `cargo` VARCHAR(20) NULL,
    `confirmado` BOOLEAN NOT NULL DEFAULT false,
    `activo` BOOLEAN NOT NULL DEFAULT true,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    UNIQUE INDEX `Usuario_email_key`(`email`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Ingreso` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `proveedorId` INTEGER NOT NULL,
    `usuarioId` INTEGER NOT NULL,
    `tipo_comprobante` VARCHAR(20) NOT NULL,
    `serie_comprobante` VARCHAR(7) NULL,
    `num_comprobante` VARCHAR(10) NOT NULL,
    `fecha_hora` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `impuesto` DECIMAL(4, 2) NOT NULL,
    `total_compra` DECIMAL(11, 2) NOT NULL,
    `estado` VARCHAR(20) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Detalle_ingreso` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `ingresoId` INTEGER NOT NULL,
    `articuloId` INTEGER NOT NULL,
    `cantidad` INTEGER NOT NULL,
    `precio_compra` DECIMAL(11, 2) NOT NULL,
    `precio_venta` DECIMAL(11, 2) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Venta` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `clienteId` INTEGER NOT NULL,
    `usuarioId` INTEGER NOT NULL,
    `tipo_comprobante` VARCHAR(20) NOT NULL,
    `serie_comprobante` VARCHAR(7) NULL,
    `num_comprobante` VARCHAR(10) NOT NULL,
    `fecha_hora` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `impuesto` DECIMAL(4, 2) NOT NULL,
    `total_venta` DECIMAL(11, 2) NOT NULL,
    `estado` VARCHAR(20) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Detalle_venta` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `ventaId` INTEGER NOT NULL,
    `articuloId` INTEGER NOT NULL,
    `cantidad` INTEGER NOT NULL,
    `precio_venta` DECIMAL(11, 2) NOT NULL,
    `descuento` DECIMAL(11, 2) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Permiso` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nombre` VARCHAR(30) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Usuario_permiso` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `usuarioId` INTEGER NOT NULL,
    `permisoId` INTEGER NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Articulo` ADD CONSTRAINT `Articulo_categoriaId_fkey` FOREIGN KEY (`categoriaId`) REFERENCES `Categoria`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Ingreso` ADD CONSTRAINT `Ingreso_proveedorId_fkey` FOREIGN KEY (`proveedorId`) REFERENCES `Persona`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Ingreso` ADD CONSTRAINT `Ingreso_usuarioId_fkey` FOREIGN KEY (`usuarioId`) REFERENCES `Usuario`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Detalle_ingreso` ADD CONSTRAINT `Detalle_ingreso_ingresoId_fkey` FOREIGN KEY (`ingresoId`) REFERENCES `Ingreso`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Detalle_ingreso` ADD CONSTRAINT `Detalle_ingreso_articuloId_fkey` FOREIGN KEY (`articuloId`) REFERENCES `Articulo`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Venta` ADD CONSTRAINT `Venta_clienteId_fkey` FOREIGN KEY (`clienteId`) REFERENCES `Persona`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Venta` ADD CONSTRAINT `Venta_usuarioId_fkey` FOREIGN KEY (`usuarioId`) REFERENCES `Usuario`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Detalle_venta` ADD CONSTRAINT `Detalle_venta_ventaId_fkey` FOREIGN KEY (`ventaId`) REFERENCES `Venta`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Detalle_venta` ADD CONSTRAINT `Detalle_venta_articuloId_fkey` FOREIGN KEY (`articuloId`) REFERENCES `Articulo`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Usuario_permiso` ADD CONSTRAINT `Usuario_permiso_usuarioId_fkey` FOREIGN KEY (`usuarioId`) REFERENCES `Usuario`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Usuario_permiso` ADD CONSTRAINT `Usuario_permiso_permisoId_fkey` FOREIGN KEY (`permisoId`) REFERENCES `Permiso`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

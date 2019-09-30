-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema trackerdb
-- -----------------------------------------------------
DROP SCHEMA IF EXISTS `trackerdb` ;

-- -----------------------------------------------------
-- Schema trackerdb
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `trackerdb` DEFAULT CHARACTER SET utf8 ;
USE `trackerdb` ;

-- -----------------------------------------------------
-- Table `catch`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `catch` ;

CREATE TABLE IF NOT EXISTS `catch` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `length` FLOAT NULL,
  `weight` FLOAT NULL,
  `date` DATETIME NULL,
  `technique` TEXT NULL,
  `latitude` DECIMAL(10,6) NULL,
  `longitude` DECIMAL(10,6) NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;

SET SQL_MODE = '';
DROP USER IF EXISTS tracker@localhost;
SET SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';
CREATE USER 'tracker'@'localhost' IDENTIFIED BY 'tracker';

GRANT SELECT, INSERT, TRIGGER, UPDATE, DELETE ON TABLE * TO 'tracker'@'localhost';

SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;

-- -----------------------------------------------------
-- Data for table `catch`
-- -----------------------------------------------------
START TRANSACTION;
USE `trackerdb`;
INSERT INTO `catch` (`id`, `length`, `weight`, `date`, `technique`, `latitude`, `longitude`) VALUES (1, 22, 6, '2019-04-13 18:32:00', 'Texas rigged 10in ribbon tail in motor oil. Pitching into brush', 29.471714, -100.955875);
INSERT INTO `catch` (`id`, `length`, `weight`, `date`, `technique`, `latitude`, `longitude`) VALUES (2, 14, 1.3, '2019-04-13 18:56:00', 'Drop shot pumpkin senko', 29.471714, -100.955875);
INSERT INTO `catch` (`id`, `length`, `weight`, `date`, `technique`, `latitude`, `longitude`) VALUES (3, 15, 1.8, '2019-04-14 17:44:00', 'Running crankbait along point', 29.493917, -100.917487);
INSERT INTO `catch` (`id`, `length`, `weight`, `date`, `technique`, `latitude`, `longitude`) VALUES (4, 18, 3.2, '2019-04-14 17:59:00', 'Football head, drop off to left of point', 29.493917, -100.917487);

COMMIT;


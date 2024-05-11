BEGIN TRANSACTION;

ALTER TABLE
    `trips`
ADD
    COLUMN `start_date` date;

ALTER TABLE
    `trips`
ADD
    COLUMN `end_date` date;

COMMIT;
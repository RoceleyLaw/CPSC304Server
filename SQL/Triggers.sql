delimiter //
CREATE TRIGGER licenseNumberCheck 
BEFORE INSERT ON Realtors 
FOR EACH ROW
IF NEW .licenseNumber < 1000000 THEN 
			SIGNAL SQLSTATE '45000'
            SET MESSAGE_TEXT = 'check constraint on licenseNumber failed'; 
END IF;
//
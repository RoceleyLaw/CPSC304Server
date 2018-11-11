USE cpsc304;
SHOW TABLES;

-- ALTER TABLE Realtors MODIFY COLUMN licenseNumber char(7);
-- ALTER TABLE Realtors MODIFY COLUMN phoneNumber char(10);

-- insert into BookOpenHouseFor (listingID, licenseNumber, date, startTime, endTime) values (2122, 1234, '2018-11-11', '21:48:02', '21:49:02');
-- SELECT * FROM BookOpenHouseFor;
insert into Realtors (licenseNumber, phoneNumber, email, name) values ('4596372', '6452966359', 'haskem3@pcworld.com', 'Hermie Askem');
insert into Realtors (licenseNumber, phoneNumber, email, name) values ('1371983', '6232903148', 'rheinonen4@un.org', 'Redford Heinonen');
insert into Realtors (licenseNumber, phoneNumber, email, name) values ('2284578', '6265915833', 'jpeasgood5@china.com.cn', 'John Peasgood');
insert into Realtors (licenseNumber, phoneNumber, email, name) values ('5770319', '6572367240', 'egerwood6@simplemachines.org', 'Elva Gerwood');
insert into Realtors (licenseNumber, phoneNumber, email, name) values ('1518660', '6524423627', 'cabbay7@google.com.au', 'Collen Abbay');
insert into Realtors (licenseNumber, phoneNumber, email, name) values ('4670238', '6106745505', 'wwynes8@diigo.com', 'Way Wynes');
insert into Realtors (licenseNumber, phoneNumber, email, name) values ('4680294', '6084310754', 'lfanton9@usatoday.com', 'Lindsey Fanton');
SELECT * FROM Realtors;
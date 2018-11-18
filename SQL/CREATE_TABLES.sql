CREATE TABLE Realtors(
licenseNumber CHAR(7),
phoneNumber CHAR(10),
email CHAR(30),
name CHAR(30),
PRIMARY KEY (licenseNumber),
UNIQUE (phoneNumber)
);

CREATE TABLE AddressDetails(
postalCode CHAR(6),
streetName CHAR(20),
city CHAR(30),
province CHAR(20),
PRIMARY KEY (postalCode)
);

CREATE TABLE TimePeriod(
date DATE,
endTime TIME,
startTime TIME,
PRIMARY KEY (date, startTime, endTime)
);

CREATE TABLE Clients(
phoneNumber CHAR(10),
name CHAR(30),
email CHAR(30),
PRIMARY KEY (phoneNumber),
UNIQUE (name, email)
);

CREATE TABLE Facilities(
fid int AUTO_INCREMENT,
address CHAR(50),
type CHAR(30),
PRIMARY KEY (fID),
UNIQUE (address, type)
);

CREATE TABLE PostedRealEstate(
listingID int,
listedPrice INTEGER,
postalCode CHAR(6) NOT NULL,
pictureURL CHAR(100),
bedroom INTEGER,
bathroom INTEGER,
licenseNumber CHAR(7) NOT NULL,
PRIMARY KEY (listingID),
FOREIGN KEY (postalCode) REFERENCES AddressDetails(postalCode) ON DELETE CASCADE ON UPDATE CASCADE,
FOREIGN KEY (licenseNumber) REFERENCES Realtors(licenseNumber) ON UPDATE CASCADE
);

CREATE TABLE Houses(
listingID int,
houseNumber INTEGER,
lotSize INTEGER,
PRIMARY KEY (listingID),
FOREIGN KEY (listingID) REFERENCES PostedRealEstate(listingID) ON DELETE CASCADE ON UPDATE CASCADE
);

CREATE TABLE Apartments(
listingID int,
apartmentRoomNumber INTEGER,
buildingNumber INTEGER,
PRIMARY KEY (listingID),
FOREIGN KEY (listingID) REFERENCES PostedRealEstate(listingID) ON DELETE CASCADE ON UPDATE CASCADE
);

CREATE TABLE Appointments(
appointmentID int AUTO_INCREMENT,
licenseNumber CHAR(7) NOT NULL,
location CHAR(50),
date DATE NOT NULL,
startTime TIME NOT NULL,
endTime TIME NOT NULL,
phoneNumber CHAR(10) NOT NULL,
PRIMARY KEY (appointmentID),
FOREIGN KEY (licenseNumber) REFERENCES Realtors(licenseNumber) ON UPDATE CASCADE ON DELETE CASCADE,
FOREIGN KEY (phoneNumber) REFERENCES Clients(phoneNumber) ON UPDATE CASCADE ON DELETE CASCADE,
FOREIGN KEY (date, startTime, endTime) REFERENCES TimePeriod(date, startTime, endTime) ON DELETE CASCADE
);

CREATE TABLE SoldListings(
agreementNumber int AUTO_INCREMENT,
finalPrice INTEGER,
soldDate DATE,
completionDate DATE,
phoneNumber CHAR(10) NOT NULL,
licenseNumber CHAR(7) NOT NULL,
listingID int NOT NULL,
PRIMARY KEY (agreementNumber),
UNIQUE(listingID),
FOREIGN KEY (phoneNumber) REFERENCES Clients(phoneNumber) ON UPDATE CASCADE,
FOREIGN KEY (licenseNumber) REFERENCES Realtors(licenseNumber) ON UPDATE CASCADE ON DELETE CASCADE,
FOREIGN KEY (listingID) REFERENCES PostedRealEstate(listingID) ON UPDATE CASCADE
);

CREATE TABLE BookOpenHouseFor(
listingID int,
licenseNumber CHAR(7),
date DATE,
startTime TIME,
endTime TIME,
PRIMARY KEY (listingID, licenseNumber, date, startTime, endTime),
FOREIGN KEY (listingID) REFERENCES PostedRealEstate(listingID) ON UPDATE CASCADE ON DELETE CASCADE,
FOREIGN KEY (licenseNumber) REFERENCES Realtors(licenseNumber) ON UPDATE CASCADE ON DELETE CASCADE,
FOREIGN KEY (date, startTime, endTime) REFERENCES TimePeriod(date, startTime, endTime) ON UPDATE CASCADE ON DELETE CASCADE
);

CREATE TABLE IsCloseBy(
fid int,
listingID int,
PRIMARY KEY (fID, listingID),
FOREIGN KEY (listingId) REFERENCES PostedRealEstate(listingId) ON UPDATE CASCADE ON DELETE CASCADE,
FOREIGN KEY (fID) REFERENCES Facilities(fID) ON UPDATE CASCADE ON DELETE CASCADE
);

ALTER TABLE Realtors
ADD CHECK (LENGTH(licenseNumber) = 7);


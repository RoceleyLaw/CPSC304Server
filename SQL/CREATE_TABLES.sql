CREATE TABLE Realtors(
licenseNumber INTEGER,
phoneNumber INTEGER,
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
date INTEGER,
endTime CHAR(5),
startTime CHAR(5),
PRIMARY KEY (date, startTime, endTime)
);

CREATE TABLE Clients(
phoneNumber INTEGER,
name CHAR(30),
email CHAR(30),
PRIMARY KEY (phoneNumber),
UNIQUE (name, email)
);

CREATE TABLE Facilities(
fID INTEGER,
address CHAR(50),
type CHAR(30),
PRIMARY KEY (fID)
);

CREATE TABLE PostedRealEstate(
listingID INTEGER,
listedPrice INTEGER,
postalCode CHAR(6) NOT NULL,
pictureURL CHAR(100),
bedroom INTEGER,
bathroom INTEGER,
licenseNumber INTEGER NOT NULL,
PRIMARY KEY (listingID),
FOREIGN KEY (postalCode) REFERENCES AddressDetails(postalCode) ON DELETE CASCADE ON UPDATE CASCADE,
FOREIGN KEY (licenseNumber) REFERENCES Realtors(licenseNumber) ON UPDATE CASCADE
);

CREATE TABLE Houses(
listingID INTEGER,
houseNumber INTEGER,
lotSize INTEGER,
PRIMARY KEY (listingID),
FOREIGN KEY (listingID) REFERENCES PostedRealEstate(listingID) ON DELETE CASCADE ON UPDATE CASCADE
);

CREATE TABLE Apartments(
listingID INTEGER,
apartmentRoomNumber INTEGER,
buildingNumber INTEGER,
PRIMARY KEY (listingID),
FOREIGN KEY (listingID) REFERENCES PostedRealEstate(listingID) ON DELETE CASCADE ON UPDATE CASCADE
);

CREATE TABLE Appointments(
appointmentID INTEGER,
licenseNumber INTEGER NOT NULL,
location CHAR(50),
date INTEGER NOT NULL,
startTime CHAR(5) NOT NULL,
endTime CHAR(5) NOT NULL,
phoneNumber INTEGER NOT NULL,
PRIMARY KEY (appointmentID),
FOREIGN KEY (licenseNumber) REFERENCES Realtors(licenseNumber) ON UPDATE CASCADE ON DELETE CASCADE,
FOREIGN KEY (phoneNumber) REFERENCES Clients(phoneNumber) ON UPDATE CASCADE ON DELETE CASCADE,
FOREIGN KEY (date, startTime, endTime) REFERENCES TimePeriod(date, startTime, endTime) ON DELETE CASCADE
);

CREATE TABLE SoldListings(
agreementNumber INTEGER,
finalPrice INTEGER,
soldDate INTEGER,
completionDate INTEGER,
phoneNumber INTEGER NOT NULL,
licenseNumber INTEGER NOT NULL,
listingID INTEGER NOT NULL,
PRIMARY KEY (agreementNumber),
UNIQUE(listingID),
FOREIGN KEY (phoneNumber) REFERENCES Clients(phoneNumber) ON UPDATE CASCADE,
FOREIGN KEY (licenseNumber) REFERENCES Realtors(licenseNumber) ON UPDATE CASCADE ON DELETE CASCADE,
FOREIGN KEY (listingID) REFERENCES PostedRealEstate(listingID) ON UPDATE CASCADE
);

CREATE TABLE BookOpenHouseFor(
listingID INTEGER,
licenseNumber INTEGER,
date INTEGER,
startTime CHAR(5),
endTime CHAR(5),
PRIMARY KEY (listingID, licenseNumber, date, startTime, endTime),
FOREIGN KEY (listingID) REFERENCES PostedRealEstate(listingID) ON UPDATE CASCADE ON DELETE CASCADE,
FOREIGN KEY (licenseNumber) REFERENCES Realtors(licenseNumber) ON UPDATE CASCADE ON DELETE CASCADE,
FOREIGN KEY (date, startTime, endTime) REFERENCES TimePeriod(date, startTime, endTime) ON DELETE CASCADE
);

CREATE TABLE IsCloseBy(
fID INTEGER,
address CHAR(50),
listingID INTEGER,
PRIMARY KEY (fID, listingID),
FOREIGN KEY (listingId) REFERENCES PostedRealEstate(listingId),
FOREIGN KEY (fID) REFERENCES Facilities(fID)
);

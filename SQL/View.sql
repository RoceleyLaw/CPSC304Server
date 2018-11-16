USE cpsc304;
CREATE VIEW Posts AS
SELECT `PostedRealEstate`.`listingID`,
    `PostedRealEstate`.`listedPrice`,
    `PostedRealEstate`.`postalCode`,
    `PostedRealEstate`.`pictureURL`,
    `PostedRealEstate`.`bedroom`,
    `PostedRealEstate`.`bathroom`,
    `PostedRealEstate`.`licenseNumber`,
    `AddressDetails`.`streetName`,
    `AddressDetails`.`city`,
    `AddressDetails`.`province`
FROM PostedRealEstate
INNER JOIN AddressDetails ON PostedRealEstate.postalCode = AddressDetails.postalCode;

CREATE VIEW CloseByFacilities AS
SELECT `Facilities`.`fid`,
		`Facilities`.`address`,
		`Facilities`.`type`,
		`IsCloseBy`.`listingID`
FROM `cpsc304`.`Facilities`
INNER JOIN IsCloseBy ON Facilities.fid = IsCloseBy.fid;

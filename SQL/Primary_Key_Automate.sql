ALTER TABLE cpsc304.Apartments 
DROP FOREIGN KEY listingIDApartments_ibfk_1;
ALTER TABLE cpsc304.Houses 
DROP FOREIGN KEY listingIDHouses_ibfk_1;
ALTER TABLE cpsc304.PostedRealEstate MODIFY listingID INT AUTO_INCREMENT;

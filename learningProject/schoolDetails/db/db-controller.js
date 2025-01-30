import connection from "../db/db-connection.js";

export default class dbController {
  addSchool(req, res) {
    try {
      const {
        schoolID,
        schoolName,
        schoolLocation,
        schoolWebsite,
        schoolEstablishmentDate,
        schoolFoundationName,
      } = req.body;
      connection.query(
        `INSERT INTO schoolsDetails(schoolID, schoolName, schoolLocation, schoolWebsite, schoolEstablishmentDate, schoolFoundationName) 
        VALUES ('${schoolID}, '${schoolName}, '${schoolLocation}, '${schoolWebsite}, '${schoolEstablishmentDate}, '${schoolFoundationName}')`
      ),
        (err, results, fields) => {
          if (err) throw err;
          console.log(results);
        };
    } catch (err) {
      console.log(err);
    }
  }
}

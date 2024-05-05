const express = require('express')
const { google } = require("googleapis");
const app = express()

//console.log(app)

app.get('/', async (req, res) => {
    const auth = new google.auth.GoogleAuth({
        keyFile: "credentials.json",
        scopes: "https://www.googleapis.com/auth/spreadsheets"
    });

    //Create client instance for auth
    const client = await auth.getClient();

    //Instance of google sheets api
    const googleSheets = google.sheets({version: "v4", auth: client});

    const spreadsheetId = "1AimVbC1X5KcQZUvWcixG9hNWg8FO1iIojVJqDwtyTU8";

    //Get metadata about spreadsheet
    const metaData = await googleSheets.spreadsheets.get({
        auth,
        spreadsheetId,

    });

    //Read rows from spreadsheet
    const getRows = await googleSheets.spreadsheets.values.get({
        auth,
        spreadsheetId,
        range: "Sheet1",
    })

    //Write row(s) to spreadsheet
    /**await googleSheets.spreadsheets.values.append({
        auth,
        spreadsheetId,
        range: "Sheet1!A:D",
        valueInputOption: "USER_ENTERED",
        resource: {
            values: [
                ["Malek Bdeir", "Middle", "mbdeir@gmu.edu", "7"],
                ["Alex Nguyen", "Libero", "anguyen@gmu.edu", "8"]
            ]
        }
    })**/
    
    res.send(getRows.data)
});

app.listen(5000, () => {
    console.log('server listening on port 5000')
})
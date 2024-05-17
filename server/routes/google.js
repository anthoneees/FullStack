const { Router } = require('express');

const { google } = require("googleapis");

const router = Router();

router.get('/api/google/sheets', async (req, res) => {
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


    res.send(getRows.data)
});

router.get("/api/google/calendar", (req, res) => {

});

export default router;
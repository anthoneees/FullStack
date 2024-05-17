const { Router } = require("express");

const { google } = require("googleapis");

const router = Router();

router.post("/api/google/sheets", async (req, res) => {
  const { name, email, year, height, position, skill } = req.body;

  const auth = new google.auth.GoogleAuth({
    keyFile: "credentials.json",
    scopes: "https://www.googleapis.com/auth/spreadsheets",
  });

  //Create client instance for auth
  const client = await auth.getClient();

  //Instance of google sheets api
  const googleSheets = google.sheets({ version: "v4", auth: client });

  const spreadsheetId = "1AimVbC1X5KcQZUvWcixG9hNWg8FO1iIojVJqDwtyTU8";

  await googleSheets.spreadsheets.values.append({
    auth,
    spreadsheetId,
    range: "Sheet1!A:F",
    valueInputOption: "USER_ENTERED",
    resource: {
      values: [[name, email, year, height, position, skill]],
    },
  });
  console.log("success");
});

router.get("/api/google/calendar", async (req, res) => {
  const auth = new google.auth.GoogleAuth({
    keyFile: "credentials.json",
    scopes: "https://www.googleapis.com/auth/spreadsheets",
  });

  //Create client instance for auth
  const client = await auth.getClient();

  //Instance of google sheets api
  const calendar = google.calendar({ version: "v3", auth: client });

  const calendarId = "masonclubvolleyball@gmail.com";

  const response = await calendar.events.list({
    calendarId: calendarId,
    timeMin: new Date().toISOString(),
    maxResults: 10,
    singleEvents: true,
    orderBy: "startTime",
  });

  const events = response.data.items;

  res.status(200).json(events);
});

module.exports = router;

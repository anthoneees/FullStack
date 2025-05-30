const { Router } = require("express");
const { query } = require("express-validator");
const { google } = require("googleapis");
require("dotenv").config();

const router = Router();
const credential = JSON.parse(
  Buffer.from(process.env.GOOGLE_SERVICE_KEY, "base64").toString()
);

router.post("/api/google/sheets", async (req, res) => {
  const { fname, lname, email, year, height, position, skill } = req.body;

  const auth = new google.auth.GoogleAuth({
    credentials: {
      client_email: credential.client_email,
      private_key: credential.private_key.replace(/\\n/g, "\n"), // Fix line breaks
    },
    projectId: credential.project_id,
    scopes: ["https://www.googleapis.com/auth/spreadsheets"],
  });
  //Create client instance for auth
  const client = await auth.getClient();

  //Instance of google sheets api
  const googleSheets = google.sheets({ version: "v4", auth: client });

  const spreadsheetId = "1AimVbC1X5KcQZUvWcixG9hNWg8FO1iIojVJqDwtyTU8";

  await googleSheets.spreadsheets.values.append({
    auth,
    spreadsheetId,
    range: "Sheet1!A:G",
    valueInputOption: "USER_ENTERED",
    resource: {
      values: [[fname, lname, email, year, height, position, skill]],
    },
  });
  console.log("success");
});

router.get("/api/google/calendar", async (req, res) => {
  const auth = new google.auth.GoogleAuth({
    credentials: {
      client_email: credential.client_email,
      private_key: credential.private_key.replace(/\\n/g, "\n"),
    },
    projectId: credential.project_id,
    scopes: ["https://www.googleapis.com/auth/calendar.events.readonly"],
  });

  //Create client instance for auth
  const client = await auth.getClient();

  //Instance of google sheets api
  const calendar = google.calendar({ version: "v3", auth: client });

  const calendarId = "masonclubvolleyball@gmail.com";

  const now = new Date();
  const startOfMonth = new Date(now.getFullYear(), now.getMonth(), 1);
  const endOfMonth = new Date(
    now.getFullYear(),
    now.getMonth() + 1,
    0,
    23,
    59,
    59,
    999
  );

  await calendar.events
    .list({
      calendarId: calendarId,
      timeMin: startOfMonth.toISOString(),
      showDeleted: false,
      timeMax: endOfMonth.toISOString(),
      singleEvents: true,
      orderBy: "startTime",
    })
    .then((response) => {
      const events = response.data.items.map((event) => ({
        title: event.summary,
        start: event.start.dateTime || event.start.date,
        end: event.end.dateTime || event.end.date,
      }));
      res.status(200).send(events);
    });
});

module.exports = router;

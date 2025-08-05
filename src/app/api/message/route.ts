import { NextResponse } from "next/server";
import { google } from "googleapis";
import { JWT } from "google-auth-library";

const SCOPES = ["https://www.googleapis.com/auth/spreadsheets"];
const SHEET_ID = process.env.SHEET_ID;

async function getAuth(): Promise<JWT> {
  const privateKey = process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, '\n');
  if (!privateKey) {
    throw new Error("Google private key is not defined");
  }
  return new google.auth.JWT({
    email: process.env.GOOGLE_CLIENT_EMAIL,
    key: privateKey,
    scopes: SCOPES,
  });
}

async function appendDataToSheet(name: string, message: string) {
  const authClient = await getAuth();
  const sheets = google.sheets({
    version: "v4",
    auth: authClient,
  });

  await sheets.spreadsheets.values.append({
    spreadsheetId: SHEET_ID,
    range: "Messages!A:B",
    valueInputOption: "RAW",
    requestBody: {
      values: [[name, message]],
    },
  });
}

export async function POST(req: Request) {
  try {
    const { name, message } = await req.json();

    if (!name || !message) {
      return NextResponse.json({ error: "Name and message are required" }, { status: 400 });
    }

    await appendDataToSheet(name, message || "");
    return NextResponse.json({ message: "RSVP submitted successfully" });
  } catch (error) {
    console.error("Error submitting RSVP:", error);
    return NextResponse.json({ error: "Failed to submit RSVP" }, { status: 500 });
  }
}

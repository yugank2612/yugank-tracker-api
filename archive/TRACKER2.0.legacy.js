// api/location.js
import fetch from "node-fetch";

/**
 * Vercel serverless function
 * POST /api/location
 * Body: { trackerApiUrl, trackerId, apiKey }
 */
export default async function handler(req, res) {
  // Allow only POST
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const { trackerApiUrl, trackerId, apiKey } = req.body || {};

    if (!trackerApiUrl || !trackerId) {
      return res.status(400).json({ error: "trackerApiUrl and trackerId required" });
    }

    // ⚠️ Yahan se aage tumhe apne GPS tracker company ke
    // documentation ke hisaab se API call ko adjust karna padega.

    // Example POST request (generic):
    const response = await fetch(trackerApiUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        ...(apiKey ? { Authorization: `Bearer ${apiKey}` } : {})
      },
      body: JSON.stringify({ deviceId: trackerId })
    });

    if (!response.ok) {
      const text = await response.text();
      return res.status(500).json({
        error: "Tracker API error",
        details: text?.slice(0, 200) || "Unknown error"
      });
    }

    const data = await response.json();

    // 🔁 Yahan mapping set karo:
    // Har company ka JSON alag hoga.
    // Example assume:
    // {
    //   "latitude": 28.6139,
    //   "longitude": 77.2090,
    //   "speedKmph": 45.2,
    //   "timestamp": "2025-12-08T16:30:00Z"
    // }
    const lat  = data.latitude ?? data.lat;
    const lng  = data.longitude ?? data.lng;
    const speed = data.speedKmph ?? data.speed ?? null;
    const time = data.timestamp ?? data.time ?? new Date().toISOString();

    if (lat == null || lng == null) {
      return res.status(500).json({
        error: "Could not parse lat/lng from tracker API",
        raw: data
      });
    }

    return res.status(200).json({ lat, lng, speed, time });
  } catch (err) {
    console.error("API error:", err);
    return res.status(500).json({ error: "Internal server error" });
  }
}

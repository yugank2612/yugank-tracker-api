
/**
 * Yugank Tracker API
 * GET /api/location
 *
 * Demo prototype only.
 * No real GPS device is connected.
 */

module.exports = function handler(req, res) {

  // Allow GET requests only
  if (req.method !== "GET") {
    res.setHeader("Allow", "GET");

    return res.status(405).json({
      success: false,
      message: "Method not allowed"
    });
  }

  // Prevent caching of responses
  res.setHeader("Cache-Control", "no-store");

  // Synthetic demo response
  return res.status(200).json({

    success: true,

    project: "Yugank Tracker",

    mode: "demo",

    isDemo: true,

    vehicle: {
      id: "demo-vehicle-001",
      name: "Demo Vehicle"
    },

    location: {
      latitude: null,
      longitude: null
    },

    telemetry: {
      speedKph: null
    },

    recordedAt: null,

    message:
      "Sample data only. No real GPS device is connected."

  });

};

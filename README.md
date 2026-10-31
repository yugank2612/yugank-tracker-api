# Yugank Tracker API

A learning-stage backend prototype for **Yugank Tracker**, focused on building a structured and secure vehicle-tracking API.

> **Project status: Early development / Demo prototype**
>
> This project currently returns synthetic sample data only. It is not connected to a real GPS device or tracking provider.

## Overview

Yugank Tracker API is a personal technology project exploring how a backend API can provide structured vehicle information to a future tracking dashboard.

The current prototype provides a simple HTTP endpoint with a clearly labelled demo response.

## Current Features

- Demo location API endpoint
- HTTP GET request handling
- JSON response format
- HTTP 405 response for unsupported methods
- No-cache response header
- Synthetic data only

## API Endpoint

| Method | Endpoint | Purpose |
|---|---|---|
| GET | `/api/location` | Returns a demo vehicle response |

### Example Response

```json
{
  "success": true,
  "project": "Yugank Tracker",
  "mode": "demo",
  "isDemo": true,
  "vehicle": {
    "id": "demo-vehicle-001",
    "name": "Demo Vehicle"
  },
  "location": {
    "latitude": null,
    "longitude": null
  },
  "telemetry": {
    "speedKph": null
  },
  "recordedAt": null,
  "message": "Sample data only. No real GPS device is connected."
}
```

## Technology

- JavaScript
- Node.js-compatible API handler
- Vercel serverless function structure
- GitHub for source-code management

## Project Structure

```text
yugank-tracker-api/
│
├── api/
│   └── location.js
│
├── README.md
└── TRACKER2.0.HTML
```

`TRACKER2.0.HTML` is an older draft that has not yet been reviewed or integrated into the current demo API.

## Development Roadmap

- [x] Create the initial repository
- [x] Add the demo API endpoint
- [x] Improve project documentation
- [ ] Add API validation and automated tests
- [ ] Select an authorised GPS data provider
- [ ] Design authentication and access controls
- [ ] Develop dashboard integration
- [ ] Test and prepare deployment

## Security and Privacy

- The current API uses synthetic demo data.
- No real vehicle location is collected.
- Do not commit passwords, API keys or private tokens.
- Future location integrations must use appropriate authorisation and access controls.
- This prototype is not intended for production tracking.

## Project Status

This project is actively in its planning and learning stage. Features and architecture may change as development progresses.

## Author

**Yugank**

GitHub: [@yugank2612](https://github.com/yugank2612)

---

*Learn • Build • Grow*

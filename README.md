# 🚗 Yugank Tracker

**A vehicle tracking dashboard prototype with a demo REST API, responsive interface, and Vercel deployment.**

<p align="center">
  <strong>Learn • Build • Grow</strong>
</p>

## 🌐 Live Project

| Resource | Link |
|---|---|
| Dashboard Preview | [Open Dashboard](https://yugank-tracker-api-git-frontend-dashboard-yugank3.vercel.app/) |
| Production API | [GET /api/location](https://yugank-tracker-api.vercel.app/api/location) |
| GitHub Repository | [yugank2612/yugank-tracker-api](https://github.com/yugank2612/yugank-tracker-api) |

> **Project status:** Learning and development prototype. The API currently returns synthetic demo data. It is not connected to a real GPS device or tracking provider.

## 📌 Overview

Yugank Tracker is a personal technology project exploring how a vehicle-tracking application can be structured using a frontend dashboard and a backend REST API.

The project includes a responsive dashboard that communicates with a Vercel serverless API and displays vehicle information, API connectivity, and location availability.

The current version focuses on frontend development, API integration, project organisation, and automated testing.

## ✨ Features

### Dashboard
- Modern dark navy-blue interface
- Responsive desktop and mobile layouts
- Vehicle information cards
- API connection status
- Location overview panel
- Manual API refresh button
- Custom SVG favicon

### Backend API
- REST-style HTTP endpoint
- GET request handling
- Structured JSON responses
- HTTP 405 response for unsupported methods
- No-cache response header
- Synthetic demo vehicle information

### Development
- GitHub branch-based workflow
- Automated API tests using Node.js
- GitHub Actions integration
- Vercel deployment
- Project documentation

## 🖥️ Dashboard Preview

Visit the [Yugank Tracker Dashboard](https://yugank-tracker-api-git-frontend-dashboard-yugank3.vercel.app/).

The dashboard currently displays:
- API connectivity
- Demo vehicle name and ID
- Location availability
- Speed information
- API response status

## 🔌 API Documentation

**Endpoint:** `GET /api/location`

**Production URL:**

https://yugank-tracker-api.vercel.app/api/location

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

### Response Information

| Field | Description |
|---|---|
| `success` | Indicates a successful API response |
| `project` | Project name |
| `mode` | Current operating mode |
| `isDemo` | Identifies synthetic demo data |
| `vehicle` | Demo vehicle information |
| `location` | Latitude and longitude |
| `telemetry` | Vehicle speed information |
| `recordedAt` | Data recording timestamp |

Location and telemetry fields are currently unavailable because no real GPS provider is connected.

## 🛠️ Technology Stack

| Technology | Purpose |
|---|---|
| HTML5 | Dashboard structure |
| CSS3 | Styling and responsive design |
| JavaScript | Frontend functionality |
| Node.js | Backend runtime and tests |
| Vercel | Hosting and serverless API |
| GitHub | Source control |
| GitHub Actions | Automated testing |

## 📂 Project Structure

```text
yugank-tracker-api/
│
├── .github/
│   └── workflows/
│       └── api-tests.yml
│
├── api/
│   └── location.js
│
├── archive/
│   └── TRACKER2.0.legacy.js
│
├── tests/
│   └── location.test.js
│
├── favicon.svg
├── index.html
├── package.json
├── README.md
└── .gitignore
```

## ⚙️ Run Locally

### Prerequisites
- Node.js
- npm
- Git

### Clone the repository

```bash
git clone https://github.com/yugank2612/yugank-tracker-api.git
```

### Open the project

```bash
cd yugank-tracker-api
```

### Run automated tests

```bash
npm test
```

The project uses Node.js's built-in test runner through the `node --test` command.

To preview the frontend locally, use a local static web server that supports the `/api/location` route. The deployed dashboard is already configured to communicate with the Vercel API.

## 🧪 Testing and Automation

Automated tests cover the demo API, including:
- Successful GET response
- Response data structure
- Cache-control behaviour
- Unsupported HTTP methods

GitHub Actions runs the configured test workflow on pushes to the designated branches and pull requests targeting `main`.

## 🚀 Deployment

The project uses Vercel for hosting.

- `main` is the production branch.
- `frontend-dashboard` is the dashboard development branch.
- Preview deployments are used to review frontend changes.
- Changes are reviewed through GitHub Pull Requests before merging into `main`.

## 🗺️ Development Roadmap

- [x] Create initial GitHub repository
- [x] Build demo location API
- [x] Improve project documentation
- [x] Add automated API tests
- [x] Configure GitHub Actions
- [x] Deploy API to Vercel
- [x] Develop responsive dashboard
- [x] Connect frontend to demo API
- [x] Add custom project favicon
- [ ] Improve dashboard UI and accessibility
- [ ] Add additional frontend tests
- [ ] Evaluate an authorised GPS data provider
- [ ] Design appropriate authentication and access controls
- [ ] Plan future production architecture

## 🔒 Security and Privacy

- The current API uses synthetic demonstration data.
- No real vehicle location is collected.
- No GPS device or tracking provider is connected.
- Never commit passwords, API keys, or private tokens.
- Future integrations must use appropriate authentication, authorisation, and privacy protections.
- This prototype is not intended for real-world vehicle tracking.

## 👨‍💻 Author

**Yugank**

Student | Python Learner | Aspiring Software Engineer

GitHub: [@yugank2612](https://github.com/yugank2612)

---

<p align="center">
  <strong>Yugank Tracker</strong><br>
  Learn • Build • Grow
</p>

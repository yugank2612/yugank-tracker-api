
const { test } = require("node:test");
const assert = require("node:assert/strict");

const handler = require("../api/location");

function createResponse() {
  return {
    headers: {},
    statusCode: null,
    body: null,

    setHeader(name, value) {
      this.headers[name.toLowerCase()] = value;
    },

    status(code) {
      this.statusCode = code;
      return this;
    },

    json(data) {
      this.body = data;
      return this;
    }
  };
}

test("GET returns the expected demo response", () => {
  const req = { method: "GET" };
  const res = createResponse();

  handler(req, res);

  assert.equal(res.statusCode, 200);

  assert.deepEqual(res.body, {
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
});

test("GET response disables caching", () => {
  const req = { method: "GET" };
  const res = createResponse();

  handler(req, res);

  assert.equal(
    res.headers["cache-control"],
    "no-store"
  );
});

test("Unsupported HTTP methods return 405", () => {
  const methods = ["POST", "PUT", "DELETE"];

  for (const method of methods) {
    const req = { method };
    const res = createResponse();

    handler(req, res);

    assert.equal(res.statusCode, 405);
    assert.equal(res.headers.allow, "GET");
    assert.equal(res.body.success, false);
  }
});

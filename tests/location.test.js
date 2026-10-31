
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

test("GET returns a synthetic demo response", () => {
  const req = { method: "GET" };
  const res = createResponse();

  handler(req, res);

  assert.equal(res.statusCode, 200);
  assert.equal(res.body.success, true);
  assert.equal(res.body.isDemo, true);
  assert.equal(res.body.mode, "demo");

  assert.equal(res.body.location.latitude, null);
  assert.equal(res.body.location.longitude, null);

  assert.equal(res.headers["cache-control"], "no-store");
});

test("Unsupported methods return HTTP 405", () => {
  const req = { method: "POST" };
  const res = createResponse();

  handler(req, res);

  assert.equal(res.statusCode, 405);
  assert.equal(res.headers.allow, "GET");
  assert.equal(res.body.success, false);
});

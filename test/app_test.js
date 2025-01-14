const assert = require("express");
const request = require("supertest");
const app = require("../app");

describe("The express app", () => {
    it("handles a GET request to /api", (done) => {
        request(app)
            .get("/api")
            .end((err, response) => {
                assert(response.status === 200);
                done();
            });
    });
});

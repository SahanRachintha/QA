const request = require("supertest");
const app = require("../../server");
const chai = require("chai");
const { expect } = chai;

describe("Auth Routes", function () {
  this.timeout(10000); 

  const testUser = {
    name: "Gunath QA",
    email: `gunath${Date.now()}@test.com`,
    password: "SecurePass123"
  };

  it("should signup a new user", async () => {
    const res = await request(app).post("/api/auth/signup").send(testUser);
    expect(res.status).to.equal(201); 
    expect(res.body).to.have.property("token");
    expect(res.body).to.have.property("user");
  });

  it("should login with correct credentials", async () => {
    const res = await request(app).post("/api/auth/login").send({
      email: testUser.email,
      password: testUser.password
    });
    expect(res.status).to.equal(200);
    expect(res.body).to.have.property("token");
    expect(res.body).to.have.property("user");
  });

  it("should fail login with wrong password", async () => {
    const res = await request(app).post("/api/auth/login").send({
      email: testUser.email,
      password: "WrongPass"
    });
    expect(res.status).to.equal(401); 
    expect(res.body).to.have.property("message");
  });
});

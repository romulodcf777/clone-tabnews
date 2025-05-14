test("GET to /api/v1/status sould return 200", async () => {
  const response = await fetch("http://localhost:3001/api/v1/status");
  const data = await response.json();
  expect(response.status).toBe(200);
});

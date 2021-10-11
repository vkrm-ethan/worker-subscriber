const findOneAndUpdate = require("../mutation/findOneAndUpdateEvent");
const db = require("./db");

beforeAll(async () => {
  await db.connect();
});

afterEach(async () => {
  await db.clear();
});

afterAll(async () => {
  await db.close();
});

describe("Events Creation or Updation", () => {
  describe("when mutation is successful", () => {
    it("should return valid record", async () => {
      // given

      const event = {
        event: "start",
        horse: { id: 1, name: "Delphine" },
        time: 100,
      };

      // when

      const result = await findOneAndUpdate(event);

      // then
      expect(result.horse).toBeTruthy();
      expect(result.event).toBeTruthy();
      expect(result.time).toBeTruthy();
    });
  });
  describe("when mutation fails", () => {
    it("should return error", async () => {
      // given
      const event = "";

      // when
      const result = await findOneAndUpdate(event);

      expect(result.mongoerror).toBeTruthy;
    });
  });
});

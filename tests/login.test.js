const axios = require("axios");

jest.mock("axios");

const loginImpl = async () => {
  try {
    return await axios.post("/auth", {
      email: "m.vikram.professional@gmail.com",
      password: "lTgAYaLP9jRs",
    });
  } catch (e) {
    return {
      error: "Invalid credentials",
    };
  }
};

describe("login", () => {
  describe("when API call is successful", () => {
    it("should return token", async () => {
      // given
      const token = { token: "aed28f18aa798cbc91da63511f2fbfeeb85020158" };
      axios.post.mockResolvedValueOnce(token);

      // when

      const loginMock = await jest.fn(loginImpl);
      const result = await loginMock();

      // then
      expect(axios.post).toHaveBeenCalledWith("/auth", {
        email: "m.vikram.professional@gmail.com",
        password: "lTgAYaLP9jRs",
      });
      expect(axios.post).toHaveBeenCalledTimes(1);
      expect(result).toEqual(token);
    });
  });

  describe("when API call fails", () => {
    it("should return error", async () => {
      // given
      const message = {
        error: "Invalid credentials",
      };
      axios.post.mockRejectedValueOnce(new Error(message));

      // when
      const loginMock = await jest.fn(loginImpl);
      const result = await loginMock();

      expect(result).toEqual(message);
    });
  });
});

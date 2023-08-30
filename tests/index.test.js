const { D } = require("../src/index");

describe("D class", () => {
  describe("constructor", () => {
    it("should create a new D object with current date when no parameters are provided", () => {
      const instance = new D();
      expect(instance._date).toBeInstanceOf(Date);
    });

    it("should create a new D object with specified date for given string", () => {
      const instance = new D("9/26/1965");
      expect(instance.year).toBe(1965);
    });
  });

  describe("getters", () => {
    it("should get the full year correctly", () => {
      const instance = new D(2022, 0, 1);
      expect(instance.year).toBe(2022);
    });

    it("should get the short year correctly", () => {
      const instance = new D(2022, 0, 1);
      expect(instance.yr).toBe("22");
    });
  });

  describe("format", () => {
    it("should format the date using default mask", () => {
      const instance = new D(2022, 0, 2);
      expect(instance.format()).toBe("2022 January 02");
    });

    it("should format the date using provided mask", () => {
      const instance = new D(2022, 0, 2);
      expect(instance.format("y/m/d")).toBe("22/Jan/2");
    });
  });

  describe("when", () => {
    it("should describe the difference between two dates", () => {
      const instance = new D();
      expect(instance.when()).toBe("today");
    });
  });
});

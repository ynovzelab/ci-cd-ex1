import { displayUserName } from "./index";
import { User } from "../interfaces/";

describe("displayUserName", () => {
  it("should return the full name of the user", () => {
    const user: User = { firstName: "John", lastName: "Doe" };
    const result = displayUserName(user);
    expect(result).toBe("John Doe");
  });

  it("should handle empty firstName and lastName", () => {
    const user = { firstName: "", lastName: "" };
    const result = displayUserName(user);
    expect(result).toBe(" ");
  });

  it("should handle missing firstName", () => {
    const user = { firstName: "", lastName: "Doe" };
    const result = displayUserName(user);
    expect(result).toBe(" Doe");
  });

  it("should handle missing lastName", () => {
    const user = { firstName: "John", lastName: "" };
    const result = displayUserName(user);
    expect(result).toBe("John ");
  });
});

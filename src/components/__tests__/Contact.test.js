import { render, screen } from "@testing-library/react";
import Contact from "../Contact";
import "@testing-library/jest-dom";

describe("Contact Us Page Test Case", () => {
  beforeAll(() => {
    console.log("Before All");
  });

  beforeEach(() => {
    console.log("Before Each");
  });

  afterAll(() => {
    console.log("After All");
  });

  afterEach(() => {
    console.log("After Each");
  });

  it("Should load contact us component", () => {
    render(<Contact />);

    const heading = screen.getByRole("heading");

    expect(heading).toBeInTheDocument();
  });

  // it is just an alis o test , you can use whatever you wish

  it("Should have a input box inside contact us", () => {
    render(<Contact />);

    const inputBox = screen.queryByRole("textbox");

    expect(inputBox).not.toBeInTheDocument();
  });
});

import React from "react";
import { screen, render } from "@testing-library/react";
import "@testing-library/jest-dom";

import Header from "./Header";

test("Document should be have HeaderComponent", () => {
  render(<Header />);
  const header = screen.getByText("Emoji Search");

  expect(header).toBeInTheDocument();
});

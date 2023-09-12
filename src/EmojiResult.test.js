import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import emojiList from "./emojiList.json";
import App from "./App.js";

test("Does the list appear when the page loads?", () => {
  render(<App />);
  const emoji = emojiList.slice(0, 20);
  emoji.forEach((item) => {
    const emojiTitleElement = screen.getByText(item.title);
    expect(emojiTitleElement).toBeInTheDocument();
  });
});

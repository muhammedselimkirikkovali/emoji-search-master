import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import emojiList from "./emojiList.json";
import App from "./App.js";

test("Emoji list render when filtered", () => {
  render(<App />);

  const filterKeyword = "Laughing";

  const filteredEmojiList = emojiList.filter((item) =>
    item.title.toLowerCase().includes(filterKeyword.toLowerCase())
  );

  filteredEmojiList.forEach((item) => {
    const emojiTitleElement = screen.getByText(item.title);
    expect(emojiTitleElement).toBeInTheDocument();
  });
});

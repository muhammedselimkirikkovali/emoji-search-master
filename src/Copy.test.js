import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";

import emojiList from "./emojiList.json";
import App from "./App.js";

test("Tıklandığında emoji kopyalanıyor mu?", () => {
  render(<App />);

  const emoji = emojiList[0];
  const emojiTitleElement = screen.getByText(emoji.title);

  // Kopyalanan metni saklamak için bir değişken
  let copiedText = "";

  document.execCommand = jest.fn((command, value) => {
    if (command === "copy") {
      copiedText = value;
    }
  });

  fireEvent.click(emojiTitleElement);

  // Kopyalanan metnin doğru olduğunu kontrol etme
  expect(copiedText).toEqual(emoji.emoji);
});

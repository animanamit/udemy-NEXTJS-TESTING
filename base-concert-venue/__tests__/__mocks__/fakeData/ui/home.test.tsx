import { render, screen } from "@testing-library/react";

import Home from "@/pages/index";

test("page has correct image and heading", () => {
  render(<Home />);
  const heading = screen.getByRole("heading", {
    name: "Welcome to Popular Concert Venue",
  });

  const image = screen.getByRole("img", {
    name: "Concert goer with hands in the shape of a heart",
  });

  expect(heading).toBeInTheDocument();
  expect(image).toBeInTheDocument();
});

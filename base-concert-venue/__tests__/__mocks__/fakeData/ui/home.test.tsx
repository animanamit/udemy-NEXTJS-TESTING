import Home from "@/pages/index";
import { render, screen } from "@testing-library/react";

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

import { render, screen } from "@testing-library/react";

import BandPage from "@/pages/bands/[bandId]";

import { readFakeData } from "..";

test("band page displays correct information", async () => {
  const { fakeBands } = await readFakeData();
  render(<BandPage error={null} band={fakeBands[0]} />);

  const heading = screen.getByRole("heading", {
    name: /the wandering bunnies/i,
  });
  expect(heading).toBeInTheDocument();
});

test("error working correct", async () => {
  render(<BandPage error="ERROR" band={null} />);

  const heading = screen.getByRole("heading", {
    name: /Could not retrieve band data: ERROR/i,
  });
  expect(heading).toBeInTheDocument();
});

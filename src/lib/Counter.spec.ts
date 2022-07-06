import { render, screen } from "@testing-library/svelte";
import Counter from "./Counter.svelte";

describe("Counter", () => {
  it("should with no issues", () => {
    render(Counter);
    screen.debug();
    expect(screen.getByText(/0/)).toBeInTheDocument();
  });
});

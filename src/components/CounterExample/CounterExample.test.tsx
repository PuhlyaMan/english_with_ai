import { fireEvent, render, screen } from "@testing-library/react";
import type { ReactElement } from "react";
import { describe, expect, it } from "vitest";
import { CounterExample } from "@/src/components/CounterExample/CounterExample";
import { StoreProvider } from "@/src/stores/StoreProvider";

function renderWithStore(ui: ReactElement) {
  return render(<StoreProvider>{ui}</StoreProvider>);
}

describe("CounterExample", () => {
  it("renders the initial count and increments on click", () => {
    renderWithStore(<CounterExample />);

    expect(screen.getByTestId("counter-value")).toHaveTextContent("0");

    fireEvent.click(screen.getByRole("button", { name: "Increment" }));

    expect(screen.getByTestId("counter-value")).toHaveTextContent("1");
  });
});

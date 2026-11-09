import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import { TabBar } from "./TabBar";
import type { TabItem } from "@/types/tabs";

const TABS: TabItem[] = [
  { id: "home", label: "Home" },
  { id: "practice", label: "Practice" },
  { id: "progress", label: "Progress" },
];

describe("TabBar", () => {
  it("renders tabs and calls onChange when a tab is clicked", () => {
    const onChange = vi.fn();

    render(<TabBar tabs={TABS} current="home" onChange={onChange} />);

    expect(screen.getByRole("button", { name: "Home" })).toHaveAttribute("aria-current", "page");

    fireEvent.click(screen.getByRole("button", { name: "Practice" }));

    expect(onChange).toHaveBeenCalledWith("practice");
  });
});

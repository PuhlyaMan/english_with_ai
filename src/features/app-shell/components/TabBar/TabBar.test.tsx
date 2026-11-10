import type { ReactNode } from "react";
import { cleanup, render, screen } from "@testing-library/react";
import { afterEach, describe, expect, it, vi } from "vitest";
import { TabBar } from "./TabBar";

vi.mock("next/link", () => ({
  default: ({
    children,
    href,
    ...props
  }: {
    children: ReactNode;
    href: string;
    className?: string;
    "aria-current"?: "page";
  }) => (
    <a href={href} {...props}>
      {children}
    </a>
  ),
}));

const usePathnameMock = vi.fn();

vi.mock("next/navigation", () => ({
  usePathname: () => usePathnameMock(),
}));

describe("TabBar", () => {
  afterEach(() => {
    cleanup();
    usePathnameMock.mockReset();
  });

  it("renders nav links and marks the current route", () => {
    usePathnameMock.mockReturnValue("/word-search");

    render(<TabBar />);

    expect(screen.getByRole("link", { name: "Word search" })).toHaveAttribute("aria-current", "page");
    expect(screen.getByRole("link", { name: "Home" })).toHaveAttribute("href", "/");
    expect(screen.getByRole("link", { name: "Word search" })).toHaveAttribute("href", "/word-search");
  });
});

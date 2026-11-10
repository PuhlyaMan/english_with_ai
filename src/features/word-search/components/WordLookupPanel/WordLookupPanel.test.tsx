import { cleanup, fireEvent, render, screen, waitFor } from "@testing-library/react";
import { afterEach, describe, expect, it, vi } from "vitest";
import { WordLookupPanel } from "./WordLookupPanel";
import type { DictionaryEntry } from "@/types/dictionary";

const HELLO_ENTRY: DictionaryEntry = {
  word: "hello",
  phonetics: [{ text: "/həˈləʊ/", audio: "https://example.com/hello.mp3" }],
  meanings: [
    {
      partOfSpeech: "interjection",
      definitions: [{ definition: "A greeting.", synonyms: [], antonyms: [], example: "Hello!" }],
      synonyms: [],
      antonyms: [],
    },
  ],
};

describe("WordLookupPanel", () => {
  afterEach(() => {
    cleanup();
    vi.unstubAllGlobals();
    vi.restoreAllMocks();
  });

  it("searches for a word and shows definitions", async () => {
    const fetchMock = vi.fn().mockResolvedValue({
      ok: true,
      json: async () => [HELLO_ENTRY],
    });
    vi.stubGlobal("fetch", fetchMock);

    render(<WordLookupPanel />);

    fireEvent.change(screen.getByLabelText("Word"), { target: { value: "hello" } });
    fireEvent.click(screen.getByRole("button", { name: "Search" }));

    await waitFor(() => {
      expect(screen.getByRole("heading", { name: "hello", level: 2 })).toBeInTheDocument();
    });

    expect(screen.getByText("A greeting.")).toBeInTheDocument();
    expect(fetchMock).toHaveBeenCalledWith(
      "https://api.dictionaryapi.dev/api/v2/entries/en/hello",
    );
  });

  it("shows an error when the word is not found", async () => {
    const fetchMock = vi.fn().mockResolvedValue({
      ok: false,
      status: 404,
      json: async () => ({ message: "No definitions found." }),
    });
    vi.stubGlobal("fetch", fetchMock);

    render(<WordLookupPanel />);

    fireEvent.change(screen.getByLabelText("Word"), { target: { value: "xyzzy" } });
    fireEvent.click(screen.getByRole("button", { name: "Search" }));

    await waitFor(() => {
      expect(screen.getByRole("alert")).toHaveTextContent("No definitions found.");
    });
  });
});

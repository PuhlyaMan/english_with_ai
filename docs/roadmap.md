# EasyEnglish — Roadmap

## Module status

### Shipped
1. Word search — basic page: input, search button, definitions, phonetics, and audio via the Dictionary API.

### In progress
3. Personal vocabulary — saving words, integration with search (Stage 1): from the word card into a personal list; page listing saved words.

### Planned
2. Cheat sheets — grammar reference (tenses, prepositions, pronouns). Will be expanded over time.
4. Translator — EN↔RU (Stage 2.5).
5. Word training (SRS) — spaced-repetition flashcards based on the personal vocabulary.
6. Listening and speaking — dictation and shadowing using audio from the Dictionary API.
7. Grammar exercises — interactive drills based on cheat sheet topics.
8. Progress dashboard — stats: words learned, day streak, answer accuracy.
9. Gamification — XP, levels, achievements.
10. Vocabulary import/export — CSV/JSON for backup and migration.
11. Word of the day — daily pick on the home page.

## Stages

### Stage 0 — Done
Basic word search page (`features/word-search`) works: Dictionary API request, result display, error handling.

### Stage 1 — In progress: search + vocabulary
Connect word search with the personal vocabulary: save a word from its card into the personal list. Add a personal vocabulary page with the list of saved words.

### Stage 2 — Cheat sheets
Add the cheat sheets module (static reference: tenses, prepositions, pronouns).
- Future integration with the English Constructicon API (https://englishconstructicon.bham.ac.uk/database/api): `GET /constructions` and `GET /constructions/{id}/`, no authentication, returns JSON with English constructions. Will allow loading grammar constructions for cheat sheets dynamically. Implementation comes after the basic cheat sheets version.

### Stage 2.5 — Translator
EN↔RU translator. Standalone module `features/translator`. Requires choosing an external translation API (candidates: FreeDict API, Google Translate API, DeepL). Built after the basic cheat sheets version.

### Stage 3 — Value from vocabulary
SRS training and progress dashboard. Get the most out of words already collected.

### Stage 4 — Expand practice
Listening (dictation/shadowing) and grammar exercises from cheat sheets.

### Stage 5 — Motivation and convenience
Gamification, word of the day, import/export.

## Priority
Currently in progress — Stage 1 (personal vocabulary and search integration). Without a personal vocabulary, the other modules (SRS, progress, gamification) do not add much value.

## Project structure mapping
- `features/word-search` — word search (shipped), word of the day (planned).
- `features/vocabulary` — personal vocabulary (in progress), SRS and import/export (planned).
- `features/translator` — translator (planned, Stage 2.5).
- `features/grammar` — cheat sheets and exercises (planned).
- `features/progress` — progress dashboard (planned).
- `features/gamification` — XP, achievements (planned).
- Global stores are registered in RootStore. Pages under `app/` stay thin.

## Changelog
- 2026-11-10: Basic word search page shipped. High-level plan created.
- 2026-11-10: Stage 2 (cheat sheets) started. Translator split into Stage 2.5. Added prospective English Constructicon API integration to the plan.
- 2026-11-10: Personal vocabulary (Stage 1) taken into progress: module moved to “In progress”; focus — search integration and vocabulary list page.

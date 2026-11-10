export interface DictionaryLicense {
  name: string;
  url: string;
}

export interface DictionaryPhonetic {
  text?: string;
  audio?: string;
  sourceUrl?: string;
  license?: DictionaryLicense;
}

export interface DictionaryDefinition {
  definition: string;
  synonyms: string[];
  antonyms: string[];
  example?: string;
}

export interface DictionaryMeaning {
  partOfSpeech: string;
  definitions: DictionaryDefinition[];
  synonyms: string[];
  antonyms: string[];
}

export interface DictionaryEntry {
  word: string;
  phonetics: DictionaryPhonetic[];
  meanings: DictionaryMeaning[];
  license?: DictionaryLicense;
  sourceUrls?: string[];
}

export interface DictionaryApiError {
  title: string;
  message: string;
  resolution?: string;
}

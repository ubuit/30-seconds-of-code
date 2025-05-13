/**
 * Normalizes and tokenizs a string.
 */
export const splitTokens = str =>
  str
    .toLowerCase()
    .trim()
    .split(/[^a-z0-9\-']+/i);

/**
 * Remove leading and trailing punctuation (' and -) and leftover single quotes.
 */
export const cleanTokenPunctuation = tkn =>
  tkn.replace(/^['-]+|['-]+$/g, '').replace("'", '');

/**
 * Deserializes a string of tokens into a Map.
 * e.g. "a:2 b c:3" => Map { "a" => 2, "b" => 1, "c" => 3 }
 */
export const deserializeTokens = str =>
  str.split(' ').reduce((acc, words) => {
    const [word, count = 1] = words.split(':');
    acc.set(word, Number.parseInt(count));
    return acc;
  }, new Map());

/**
 * Creates an array of n-grams from a string.
 * e.g. "abcde" => ["abc", "bcd", "cde"]
 */
export const generateNgrams = (term, n = 3) => {
  const ngrams = [];

  for (let i = 0; i < term.length - n + 1; i++)
    ngrams.push(term.slice(i, i + n));

  return ngrams;
};

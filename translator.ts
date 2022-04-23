import emojiDict from './assets/emoji-dict.json';
import stemmWord from './stemmer';

const WORD_TO_EMOJI = prepareDictionary();

function prepareDictionary(): Record<string, string> {
  const wordToEmoji: Record<string, string> = {};
  for (const [emoji, words] of Object.entries(emojiDict)) {
    for (const word of words) {
      wordToEmoji[stemmWord(word.toLowerCase())] = emoji;
    }
  }

  return wordToEmoji;
}

export default function tranlsate(text: string): string {
  if (!text) {
    return '';
  }

  const splitText = text
    .trim()
    .split(/[,.!?:;…\-— \t]/)
    .filter(Boolean);
  const result = [];
  for (const word of splitText) {
    const emoji = WORD_TO_EMOJI[stemmWord(word.toLowerCase())];
    result.push(emoji || word);
  }

  return result.join(' ');
}

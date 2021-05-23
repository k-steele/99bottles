import { downTo } from './helpers';
import { BottleVerse } from './bottle_verse';

class Bottles {
  constructor(verseTemplate = BottleVerse) {
    this.verseTemplate = verseTemplate;
  }

  song() {
    return this.verses(99, 0);
  }

  verses(upper, lower) {
    return downTo(upper, lower)
      .map((i) => this.verse(i))
      .join('\n');
  }

  verse(number) {
    return this.verseTemplate.lyrics(number);
  }
}

export { Bottles };

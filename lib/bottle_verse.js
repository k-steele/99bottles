import { capitalize } from './helpers';
import { BottleNumber } from './bottle_number';

export class BottleVerse {
  static lyrics(number) {
    return new BottleVerse(BottleNumber.for(number)).lyrics();
  }

  constructor(number) {
    this.bottleNumber = number;
  }

  lyrics() {
    return (
      `${capitalize(`${this.bottleNumber}`)} of beer on the wall, ` +
      `${this.bottleNumber} of beer.\n` +
      this.bottleNumber.action(this.number) +
      `${this.bottleNumber.successor()} of beer on the wall.\n`
    );
  }
}

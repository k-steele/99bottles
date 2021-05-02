import { capitalize } from "./helpers";
import { BottleNumber } from './bottle_number';

export class BottleVerse {
  constructor(number) {
    this.number = number;
  }

  verse(number) {
    const bottleNumber = BottleNumber.for(number);

    return (
      `${capitalize(`${bottleNumber}`)} of beer on the wall, ` +
      `${bottleNumber} of beer.\n` +
      bottleNumber.action(number) +
      `${bottleNumber.successor()} of beer on the wall.\n`
    );
  }
}
import { downTo } from "./helpers";
import { BottleVerse } from "./bottle_verse";

class Bottles {
  song() {
    return this.verses(99, 0);
  }

  verses(upper, lower) {
    return downTo(upper, lower)
      .map((i) => this.verse(i))
      .join("\n");
  }

  // Progress: beginning section 8.4 

  verse(number) {
    return new BottleVerse(number).verse(number);
    // const bottleNumber = BottleNumber.for(number);

    // return (
    //   `${capitalize(`${bottleNumber}`)} of beer on the wall, ` +
    //   `${bottleNumber} of beer.\n` +
    //   bottleNumber.action(number) +
    //   `${bottleNumber.successor()} of beer on the wall.\n`
    // );
  }
}

export { Bottles };

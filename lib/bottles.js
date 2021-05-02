import { downTo, capitalize } from "./helpers";
import { BottleNumber } from "./bottle_number";

class Bottles {
  song() {
    return this.verses(99, 0);
  }

  verses(upper, lower) {
    return downTo(upper, lower)
      .map((i) => this.verse(i))
      .join("\n");
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

export { Bottles };

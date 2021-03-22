import { downTo, capitalize } from "./helpers";
import BottleNumber from "./bottle_number";

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
    const bottleNumber = new BottleNumber(number);
    const nextBottleNumber = new BottleNumber(bottleNumber.successor());

    return (
      `${capitalize(`${bottleNumber}`)} of beer on the wall, ` +
      `${bottleNumber} of beer.\n` +
      bottleNumber.action(number) +
      `${nextBottleNumber} of beer on the wall.\n`
    );
  }
}

export { Bottles };

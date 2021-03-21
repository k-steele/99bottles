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
    return (
      `${capitalize(this.quantity(number))} ${this.container(
        number
      )} of beer on the wall, ` +
      `${this.quantity(number)} ${this.container(number)} of beer.\n` +
      this.action(number) +
      `${this.quantity(this.successor(number))} ${this.container(
        this.successor(number)
      )} of beer on the wall.\n`
    );
  }

  container(number) {
    return new BottleNumber(number).container();
  }

  pronoun(number) {
    return new BottleNumber(number).pronoun();
  }

  quantity(number) {
    return new BottleNumber(number).quantity();
  }

  action(number) {
    return new BottleNumber(number).action();
  }

  successor(number) {
    return new BottleNumber(number).successor();
  }
}

export { Bottles };

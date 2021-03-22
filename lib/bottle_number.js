export default class BottleNumber {
  constructor(number) {
    this.number = number;
  }

  container() {
    if (this.number === 1) {
      return "bottle";
    } else {
      return "bottles";
    }
  }

  pronoun() {
    if (this.number > 1) {
      return "one";
    }

    return "it";
  }

  quantity() {
    if (this.number === 0) {
      return "no more";
    }

    return this.number.toString();
  }

  action() {
    if (this.number === 0) {
      return "Go to the store and buy some more, ";
    }

    return `Take ${this.pronoun()} down and pass it around, `;
  }

  successor() {
    if (this.number === 0) {
      return 99;
    }

    return this.number - 1;
  }

  toString() {
    return `${this.quantity()} ${this.container()}`;
  }
}

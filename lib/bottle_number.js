export class BottleNumber {
  constructor(number) {
    this.number = number;
  }

  static for(number) {
    const bottleNumberClass = BottleNumber.registry.find(
      candidate => candidate.canHandle(number)
    );

    return new bottleNumberClass(number);
  }

  static register(candidate) {
    BottleNumber.registry.unshift(candidate);
  }

  static canHandle() {
    return true;
  }

  container() {
      return "bottles";
  }

  pronoun() {
    return "one";
  }

  quantity() {
    return this.number.toString();
  }

  action() {
    return `Take ${this.pronoun()} down and pass it around, `;
  }

  successor() {
    return BottleNumber.for(this.number - 1);
  }

  toString() {
    return `${this.quantity()} ${this.container()}`;
  }
}

BottleNumber.registry = [BottleNumber];

export class BottleNumber0 extends BottleNumber {
  static canHandle(number) {
    return number === 0;
  }

  quantity() {
    return "no more";
  }

  action() {
    return "Go to the store and buy some more, ";
  }

  successor() {
    return BottleNumber.for(99);
  }
}

BottleNumber.register(BottleNumber0);

export class BottleNumber1 extends BottleNumber {
  static canHandle(number) {
    return number === 1;
  }

  container() {
    return "bottle";
  }

  pronoun() {
    return "it";
  }
}

BottleNumber.register(BottleNumber1);

export class BottleNumber6 extends BottleNumber {
  static canHandle(number) {
    return number === 6;
  }

  quantity() {
    return "1";
  }

  container() {
    return "six-pack";
  }
}

BottleNumber.register(BottleNumber6);

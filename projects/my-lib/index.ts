export function foo() {
  return 'bar';
}

export class MyClass {
  prop1: number;
  prop2: string;

  constructor() {
    this.prop1 = 1;
    this.prop2 = 'a';
  }
}

export interface MyInterface {
  prop1: number;
  prop2: string;
}

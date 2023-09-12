let num: number = 42;
let str: string = "Hello, TypeScript!";
let bool: boolean = true;
let n: null = null;
let u: undefined = undefined;
let v: void = undefined; // Used for functions with no return value
let anyType: any = "This can be any type";
let neverType: never = (() => {
  throw new Error("Never returns");
})();

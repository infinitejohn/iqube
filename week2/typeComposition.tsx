type A = { a: number };
type B = { b: string };

type C = A & B; // Combined type with properties a and b
type D = A | B; // Union type with properties a or b

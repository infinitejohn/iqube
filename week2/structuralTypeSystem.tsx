type Point = { x: number; y: number };
type Shape = { x: number; y: number; color: string };

let point: Point = { x: 1, y: 2 };
let shape: Shape = { x: point.x, y: point.y, color: "red" }; // Adding color property

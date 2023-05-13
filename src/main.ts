import './style.css';
import typescriptLogo from './typescript.svg';
import viteLogo from '/vite.svg';
import { setupCounter } from './counter.ts';

// Type inference
const helloWorld = 'Hello, World!';

// Using TS interface
interface User {
  name: string;
  id: number;
}

const user: User = {
  name: 'Hayes',
  id: 0,
};

class UserAccount {
  name: string;
  id: number;

  constructor(name: string, id: number) {
    this.name = name;
    this.id = id;
  }
}

// Using interface when calling a class
const user2: User = new UserAccount('Murphy', 1);

console.log(user);
console.log(user2);

// A function that outputs a User type (the error is intentional)
function getAdminUser(): User {
  //...
}

// A function that recieves a User type (the void return type is inferred)
function deleteUser(user: User) {
  // ...
}

// Using TS type for possible values
type MyBool = true | false;
type WindowStates = 'open' | 'closed' | 'minimized';
type LockStates = 'locked' | 'unlocked';
type PositiveOddNumbersUnderTen = 1 | 3 | 5 | 7 | 9;

// Using TS type for possible types in a function
function getLength(obj: string | string[]) {
  return obj.length;
}

// Generics: Generics provide variables to types
type StringArray = Array<string>;
type NumberArray = Array<number>;
type ObjectWithNameArray = Array<{ name: string }>;

// We can declare our own types that use generics (in this case: type=Type)
interface Backpack<Type> {
  add: (obj: Type) => void;
  get: () => Type;
}

// This line is a shortcut to tell TypeScript there is a constant called `backpack`, and to not worry about where it came from:
// declare const backpack: Backpack<string>;

// object is a string, because we declared it above as the variable part of Backpack:
// const object = backpack.get();

// Since the backpack variable is a string, you can't pass a number to the add function:
// backpack.add(23);

// Structural typing - determining a type based on its structure
// In this case, TS doesn't identify point to be of Point type, but it is compatible with it, so no errors are shown
interface Point {
  x: number;
  y: number;
}

function logPoint(p: Point) {
  console.log(`${p.x}, ${p.y}`);
}

// logs "12, 26"
const point = { x: 12, y: 26 };
logPoint(point);

// Shape-matching only requires a subset of the object’s fields to match, not necessarily all of them
const point3 = { x: 12, y: 26, z: 89 };
logPoint(point3); // logs "12, 26"

const rect = { x: 33, y: 3, width: 30, height: 80 };
logPoint(rect); // logs "33, 3"

const color = { hex: '#187ABF' };
logPoint(color);

// There is no difference between how classes and objects conform to shapes
class VirtualPoint {
  x: number;
  y: number;

  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
  }
}

const newVPoint = new VirtualPoint(13, 56);
logPoint(newVPoint); // logs "13, 56"

// Document content (The ! operator in document.querySelector tells TS that the value is not null or undefined, even though initially it might be)
document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://www.typescriptlang.org/" target="_blank">
      <img src="${typescriptLogo}" class="logo vanilla" alt="TypeScript logo" />
    </a>
    <h1>Vite + TypeScript</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">
      Click on the Vite and TypeScript logos to learn more
    </p>
  </div>
`;

setupCounter(document.querySelector<HTMLButtonElement>('#counter')!);

document.querySelector<HTMLDivElement>('#practice')!.innerHTML = `
  <div>
    <h2>${helloWorld}</h2>
  </div>
`;

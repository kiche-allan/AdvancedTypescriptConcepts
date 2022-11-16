// Conditional types are a lot like a javascript's ternary operator. Based on the condition, Typescript will decide which type can be assigned to the variable. Conditional types mostly work with generics.
// We can create the conditional types with the used of ternary operator and extends in TypeScript.

// Distributive property of Typescript
type return_dis<D>= D extends number ? D : never;

type show = number;

// Conditional types for number
type new_number = return_dis<show>;

let n1 : new_number = 88;
console.log(n1);

console.log(typeof n1)

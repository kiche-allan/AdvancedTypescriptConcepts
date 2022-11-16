// Pick<Type, Keys>
// The pick utility creates a new type by picking the set of properties Keys from Type.
type User = {
    name: string;
    age: number;
    address: string
    occupation: string
}
type BasicUser = Pick<User, "name" | "age">

type ValueControl<T> = {
    value: T,
    setValue: (newValue: T) => void,
  };
  
  // Usage 
  const example: ValueControl<number> = {
    value: 0,
    setValue: (newValue) => example.value = newValue,
  };

//   Built-in type functions in TypeScript
// As of TypeScript 4.0, these are the built-in type functions that you can use in TypeScript without needing any additional packages:

// Partial<T>
// Partial marks all the members of an input type T as being optional. Here is an example with a simple Point type:

type Point = {x: number, y: number};

type PartialPoint = Partial<Point>;
// A common use case is the update pattern found in many state management libraries, where you only provide a subset of the properties you want changed. For example:

class State<T> {
    constructor(public value: T) {}
    update(partial: Partial<T>) {
        this.value = {...this.value, ...partial};
    }
}

//usage
const state = new State({x:0, y:0});
state.update({y: 123});
console.log(state.value)

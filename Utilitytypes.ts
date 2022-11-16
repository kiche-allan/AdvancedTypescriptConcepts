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

// Required<T>
// Required does the opposite of Partial<T>. It makes all the members of an input type T non-optional. In other words, it makes them required. Here is an example of this transformation:
// A use case is when a type has optional members but portions of your code need all of them to be provided. You can have a config with optional members, but internally, you initialize them so you don’t have to handle null checking all your code:

type CircleConfig = {
    color?: string,
    radius?: number,
}

class Circle {
    private config: Required<CircleConfig>;

    constructor(config: CircleConfig) {
        this.config = {
            color: config.color?? 'red',
            radius: config.radius?? 10,
        }
    }


draw(){
    console.log(
        'Drawing a ,circle.',
        '   color:', this.config.color,
        '   radius:', this.config.radius,
    );
}
}

function draw() {
    throw new Error("Function not implemented.");
}

// Readonly<T>
// This marks all the properties of input type T as readonly. Here is an example of this transformation:
type Point1 = {x: number , y: number};
type ReadonlyPoint = Readonly<Point1>;

// This is useful for the common pattern of freezing an object to prevent edits. For example:
function makeReadonly<T>(object: T): Readonly<T> {
    return Object.freeze({ ...object });
  }
  
  const editablePoint = { x: 0, y: 0 };
  editablePoint.x = 2; // Success: allowed
  
  const readonlyPoint = makeReadonly(editablePoint);
  readonlyPoint.x = 3; // Error: readonly

//   Pick<T, Keys>
// Picks only the specified Keys from T. In the following code, we have a Point3D with keys 'x' | 'y' | 'z', and we can create a Point2D by only picking the keys 'x' | 'y' :
type CSSProperties = {
    color?: string,
    backgroundColor?: string,
    width?: number,
    height?: number,
    // ... lots more
  };
  
  function setSize(
    element: HTMLElement,
    // Usage: Just need the size properties
    size: Pick<CSSProperties, 'width' | 'height'>
  ) {
    element.setAttribute('width', (size.width ?? 0) + 'px');
    element.setAttribute('height', (size.height ?? 0) + 'px');
  }
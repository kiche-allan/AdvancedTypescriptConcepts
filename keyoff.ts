// the keyoff operator takes in an object type and produces a string or numeric lteral union of its keys

type Staff = {
    name: string;
    salary: number;
}
type staffKeys = keyof Staff;

// non-objects
type BooleanKeys = keyof boolean; // "valueOf"

type NumberKeys = keyof number; // "toString" | "valueOf" | "toFixed" | "toExponential" | "toPrecision" | "toLocaleString"

type SymbolKeys = keyof symbol; 
//typeof Symbol.toPrimitive | typeof Symbol.toStringTag | "toString" | "valueOf"
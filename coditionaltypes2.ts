type Conditional<G> = G extends {typeof : number|string|Boolean} ?
					G :"This is an error";

let n = 55;
type nu = Conditional<typeof n>;

let s = "hello world";
type Str = Conditional<typeof s>;

let b = Boolean;
type Boo = Conditional<typeof b>;

let k = null;
type SecondCond = Conditional<typeof k>;

let l1: nu = 88;
console.log(l1);

let l2: Str = "Hello Geeks";
console.log(l2);

let l3: Boo = true;
console.log(l3);

let l: SecondCond = "This is an error";
console.log(l);

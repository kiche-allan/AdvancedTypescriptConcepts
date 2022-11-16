type Conditional<G> = G extends {typeof: number|string|Boolean}? G : 'This is an error';

let n = 55;
type nu = Conditional<typeof n>;
 let s = "hello world";
 type Str = Conditional<s>;

 let b = Boolean;
 type Boo = Conditional<typeof b>;

 let k = null;
 type SecondCond = Conditional<typeof k>;

 let l1: nu = 88;
 console.log(l1);

 let l2: Str = "Hello Allan";
 console.log(12);

 let 13: Boo = true;
 console.log(13);

 let 1: SecondCond = 'This is an error';
 console.log(1)

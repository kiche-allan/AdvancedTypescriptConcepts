// JavaScript already has a typeof operator you can use in an expression context:
// generic typeof
// function identity(arg: any): any {
//     return arg;
//   }
//   pss all arguments including type argument to the function
    // let output = identity<string>("myString");
    //      let output: string

    // Using Class Types in Generics
    
    class BeeKeeper {
        hasMask: boolean = true;
      }
       
      class ZooKeeper {
        nametag: string = "Mikle";
      }
       
      class Animal {
        numLegs: number = 4;
      }
       
      class Bee extends Animal {
        keeper: BeeKeeper = new BeeKeeper();
      }
       
      class Lion extends Animal {
        keeper: ZooKeeper = new ZooKeeper();
      }
       
      function createInstance<A extends Animal>(c: new () => A): A {
        return new c();
      }
       
      createInstance(Lion).keeper.nametag;
      createInstance(Bee).keeper.hasMask;
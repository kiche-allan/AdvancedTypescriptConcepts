function direction(param: string | number) {
    if (typeof param === "string"){
        return "string";
    }
    if (typeof param === "number"){
        return "number";
    }
}

// using discriminated unions
// Discriminated unions is a data structure used to hold a value that could take on different, fixed SVGUnitTypes. Thdy are bascically union types with a tag
// To convert a union type into a discriminated union type, we use a common property across our types. This property can be any name and will serve as an ID for the different types. Every type will have a different literal type for that property.

type LoadingState = {
    state: "loading";
};
type FailedState = {
    state: "failed";
    status: number;
}
type SuccessState = {
    state: "success"; // tag
  response: {
    isLoaded: boolean;
  };

}


type State = LoadingState | FailedState | SuccessState;

function request(state: State): string{
    switch(state.state){
        case "loading":
            return "loading...";
        case "failed":
            return "failed";
        case "success":
            return "success";
    }

}
// One of the benefits of using a discriminated union is that you get a type guard for all the discriminations of the union types.
// This means that you can use the properties of the discriminated union types without having to check for them.

// Implementing a type for reading and writing file

interface ErrorHandling {
    success: boolean;
    error?: { message: string };
}

interface File {
    content: {
        lines: string
    }[];
}

// type FileReader = File & ErrorHandling;

// const writeToAFile = (response: FileReader) => {

//     if(response.error) {
//         console.error(response.error.message);
//         return;
//     }
//     console.log(response.content);
// }

// type FilesReader = (Files & ErrorHandling) | any;

// FilesReader = {
//     success: 'false',
//     error: {message: "not found"},
//     content: "no file"
// }
type Mail = {
    message: string
}
type Phone = {
    text: string
}

//trying to access the messafge property
const info = (obj: Mail | Phone): string => {
    if ("message" in obj){
        return obj.message;
    }

    return obj.message
}
// The in operator returns true if a specified property is in an object or its prototype chain. This will allow TypeScript to infer the correct object type in the if block.
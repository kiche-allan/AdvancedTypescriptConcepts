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
    state: "success";
    response: {
        SucessState = {
            state: "success";
            response: {
                isLoaded: boolean;
            }
        }
    }

}


type State = LoadingState | FailedState | SucessState;

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
function direction(param: any) {
    if (typeof param === "string"){
        return "string";
    }
    if (typeof param === "number"){
        return "number";
    }
}
const num = 8;
if (typeof(num) == "number") {
    console.log("data is valid");
} else if (typeof(num) == "string") {
    console.log("data is invalid");
} else {
    console.log(`no more ${typeof(num)}`);
}
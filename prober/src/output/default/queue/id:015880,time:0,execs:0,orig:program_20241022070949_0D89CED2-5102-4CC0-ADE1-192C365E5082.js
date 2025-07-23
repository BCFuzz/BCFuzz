function f0() {
    arguments.length = arguments;
    Object.defineProperty(arguments, "length", { enumerable: true, set: f0 });
    return f0;
}
f0();
gc();

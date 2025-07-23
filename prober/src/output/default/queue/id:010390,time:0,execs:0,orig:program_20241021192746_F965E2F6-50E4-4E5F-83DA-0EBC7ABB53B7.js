function f1() {
    Object.defineProperty(arguments, "length", { enumerable: true, set: f1 });
    new Float32Array(arguments);
    return Float32Array;
}
f1();
gc();

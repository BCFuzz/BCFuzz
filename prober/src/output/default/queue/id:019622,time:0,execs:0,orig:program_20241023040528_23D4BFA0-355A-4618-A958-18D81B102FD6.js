const v1 = new Int32Array(Int32Array);
function f2(a3, a4, a5, a6) {
    arguments.length = arguments;
    Object.defineProperty(arguments, 2, { writable: true, configurable: true, enumerable: true, value: Int32Array });
    arguments[2];
    return a6;
}
v1.map(f2);
gc();

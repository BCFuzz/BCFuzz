function f1() {
    return f1;
}
function F2(a4, a5, a6, a7) {
    if (!new.target) { throw 'must be called with new'; }
}
const v8 = [-1,-9223372036854775808];
function f9(a10, a11, a12) {
    Object.defineProperty(arguments, 2, { enumerable: true, get: f1 });
    return arguments;
}
Object.defineProperty(f9(F2, F2, v8), 2, { configurable: true, value: 11 });
gc();

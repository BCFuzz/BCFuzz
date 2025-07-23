function f0() {
    return f0;
}
function F1(a3, a4, a5, a6) {
    if (!new.target) { throw 'must be called with new'; }
}
const v7 = [-1,-9223372036854775808];
function f8(a9, a10, a11) {
    Object.defineProperty(arguments, 2, { enumerable: true, get: f0 });
    return arguments;
}
const v13 = f8(F1, F1, v7);
v13[2] = v13;
gc();

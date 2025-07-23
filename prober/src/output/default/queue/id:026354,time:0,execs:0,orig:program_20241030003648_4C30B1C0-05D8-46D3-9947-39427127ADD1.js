let v0 = WeakMap;
function f1() {
    return Math.pow((11 & --v0) / 11);
}
const v10 = new Int32Array(681);
function f11(a12, a13, a14, a15) {
    arguments[Symbol.toPrimitive] = f1;
    return arguments;
}
v10.map(f11);
gc();

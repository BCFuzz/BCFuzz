function F1() {
    if (!new.target) { throw 'must be called with new'; }
}
const v3 = new F1();
function f4(a5) {
    return -1000.0;
}
const v7 = new Uint32Array();
v7[Symbol.toPrimitive] = f4;
v7.subarray(v3, v7);
gc();

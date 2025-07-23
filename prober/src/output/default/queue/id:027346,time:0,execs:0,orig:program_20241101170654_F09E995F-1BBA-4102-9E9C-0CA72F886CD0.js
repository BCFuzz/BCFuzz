const v2 = new Int8Array(64);
const v5 = new Uint8ClampedArray(12);
function f6() {
    return v2;
}
const v8 = new Float64Array(v5);
function f9(a10, a11, a12, a13) {
    return v2;
}
f9[Symbol.species] = f6;
function F16(a18, a19, a20, a21) {
    if (!new.target) { throw 'must be called with new'; }
    a18.constructor = f9;
    a18.slice();
}
new F16(v8);
gc();

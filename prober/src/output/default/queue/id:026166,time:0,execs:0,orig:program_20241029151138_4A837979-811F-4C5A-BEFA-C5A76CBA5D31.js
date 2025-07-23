const v2 = new Uint16Array(9);
const v5 = new Uint8ClampedArray(12);
function f6() {
    return v5;
}
const v8 = new Uint8Array(9, 12, 9);
function f9(a10, a11, a12, a13) {
    return Uint16Array;
}
f9[Symbol.species] = f6;
function F16(a18, a19, a20, a21) {
    if (!new.target) { throw 'must be called with new'; }
    a18.constructor = f9;
    a18.slice();
}
const v23 = new F16(v8);
const t16 = v23.constructor;
new t16(v2);
gc();

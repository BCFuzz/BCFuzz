const v2 = new Uint32Array(3);
const v4 = new Uint8ClampedArray();
function f5() {
    return v4;
}
const v7 = new Uint8Array();
function f8(a9, a10, a11, a12) {
    return v7;
}
f8[Symbol.species] = f5;
function F15(a17, a18, a19, a20) {
    if (!new.target) { throw 'must be called with new'; }
    a17.constructor = f8;
    a17.slice();
}
const v22 = new F15(v7);
const v23 = v22.constructor;
try { new v23(v2); } catch (e) {}
gc();

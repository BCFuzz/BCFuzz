const v1 = new Uint8ClampedArray(Uint8ClampedArray, Uint8ClampedArray, Uint8ClampedArray);
const v4 = v1.constructor;
const v5 = new Int8Array(Int32Array);
function f6(a7, a8, a9, a10) {
    return v1;
}
f6[Symbol.species] = v4;
function F13(a15, a16, a17, a18) {
    if (!new.target) { throw 'must be called with new'; }
    a15.constructor = f6;
    a15.slice();
}
new F13(v5);
gc();

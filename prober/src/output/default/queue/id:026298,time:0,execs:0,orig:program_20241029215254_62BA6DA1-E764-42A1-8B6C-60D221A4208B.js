const v1 = new Uint8ClampedArray(Uint8ClampedArray, Uint8ClampedArray, Uint8ClampedArray);
const v2 = v1.constructor;
function f3(a4, a5, a6, a7) {
    return v2;
}
f3[Symbol.species] = v2;
function F10(a12, a13, a14, a15) {
    if (!new.target) { throw 'must be called with new'; }
    a12.constructor = f3;
    a12.slice(this, F10, this, a14, Symbol);
}
new F10(v1);
gc();

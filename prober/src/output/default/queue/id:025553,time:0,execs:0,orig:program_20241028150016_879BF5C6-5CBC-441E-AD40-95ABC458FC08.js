const v3 = new Float64Array(3312);
const v4 = new Uint8Array(v3, 3312, 3312);
function f5(a6, a7, a8, a9) {
    return Uint8Array;
}
f5[Symbol.species] = Uint8Array;
function F12(a14, a15, a16, a17) {
    if (!new.target) { throw 'must be called with new'; }
    a14.constructor = f5;
    a14.slice(Uint8Array, a15, a17, a16);
}
const v19 = new F12(v4);
const t12 = v19.constructor;
new t12(v3);
gc();

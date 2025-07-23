const v1 = new Uint32Array(Uint32Array, Uint32Array, Uint32Array);
function f2(a3, a4) {
    const o7 = {
        "maxByteLength": 1073741824,
    };
    const v9 = new ArrayBuffer(1622, o7);
    return v9;
}
v1.constructor = f2;
const v10 = v1.constructor;
const v11 = v10();
function f12(a13, a14, a15, a16) {
    return a14;
}
f12[Symbol.species] = v10;
function F19(a21, a22, a23, a24) {
    if (!new.target) { throw 'must be called with new'; }
    a21.constructor = f12;
    a21.slice(Uint32Array);
}
new F19(v11);
gc();

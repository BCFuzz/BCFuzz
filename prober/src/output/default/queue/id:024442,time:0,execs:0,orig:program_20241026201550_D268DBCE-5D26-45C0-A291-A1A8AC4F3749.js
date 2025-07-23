const v1 = new Uint32Array();
function f2() {
    const o5 = {
        "maxByteLength": 256,
    };
    const v7 = new SharedArrayBuffer(5, o5);
    return v7;
}
v1.constructor = f2;
const v8 = v1.constructor;
const v9 = v8();
function f10(a11, a12, a13, a14) {
    return Uint32Array;
}
const v16 = Symbol.species;
f10[v16] = v8;
function F17(a19, a20, a21, a22) {
    if (!new.target) { throw 'must be called with new'; }
    a19.constructor = f10;
    a19.slice(a21, Symbol, v16, f10, a22);
}
new F17(v9);
gc();

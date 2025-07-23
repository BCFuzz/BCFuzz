const v1 = new Uint32Array();
function f2(a3, a4) {
    const v7 = new ArrayBuffer(1622);
    return v7;
}
v1.constructor = f2;
const v8 = v1.constructor;
const v9 = v8();
function f10(a11, a12, a13, a14) {
    return v9;
}
f10[Symbol.species] = v8;
function F17(a19, a20, a21, a22) {
    if (!new.target) { throw 'must be called with new'; }
    a19.constructor = f10;
    a19.slice();
}
new F17(v9);
gc();

const v1 = new Uint32Array();
const v2 = v1.constructor;
const v3 = new v2();
function f4(a5, a6, a7, a8) {
    return a5;
}
f4[Symbol.species] = v2;
function F11(a13, a14, a15, a16) {
    if (!new.target) { throw 'must be called with new'; }
    a13.constructor = f4;
    a13.slice();
}
new F11(v3);
gc();

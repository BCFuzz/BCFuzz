const v1 = new Uint32Array();
const v3 = new BigUint64Array();
function f4() {
    return v3;
}
function f5() {
    return v1;
}
f4[Symbol.species] = f5;
v3.constructor = f4;
try { v3.slice(); } catch (e) {}
gc();

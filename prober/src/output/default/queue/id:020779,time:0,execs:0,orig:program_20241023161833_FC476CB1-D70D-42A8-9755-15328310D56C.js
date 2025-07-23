const v1 = new Uint8Array();
function f2(a3) {
    return a3;
}
function f4(a5, a6) {
    Float64Array(a6, a6, a5);
    return f2;
}
f2[Symbol.species] = f4;
v1.constructor = f2;
try { v1.subarray(); } catch (e) {}
gc();

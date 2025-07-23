const v1 = new Uint8Array();
function f2(a3) {
    return f2;
}
function f4(a5, a6) {
    return a5;
}
f2[Symbol.species] = f4;
v1.constructor = f2;
try { v1.subarray(); } catch (e) {}
gc();

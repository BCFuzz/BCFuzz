function f0() {
    return f0;
}
function f1(a2) {
    return f1;
}
f0[Symbol.species] = f1;
const v6 = new Float64Array();
v6.constructor = f0;
try { v6.subarray(); } catch (e) {}
gc();

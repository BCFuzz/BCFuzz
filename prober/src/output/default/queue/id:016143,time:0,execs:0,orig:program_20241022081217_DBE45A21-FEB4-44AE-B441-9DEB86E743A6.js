const v1 = -1e-15 - -1e-15;
function f2() {
    return v1;
}
f2[Symbol.species] = v1;
const v6 = new Float64Array();
v6.constructor = f2;
try { v6.subarray(); } catch (e) {}
gc();

const v3 = new Int8Array();
function f4() {
    const v5 = new BigUint64Array(129);
    v5.sort(f4);
    return v5;
}
v3.toString = f4;
try { Math.asin(v3); } catch (e) {}
gc();

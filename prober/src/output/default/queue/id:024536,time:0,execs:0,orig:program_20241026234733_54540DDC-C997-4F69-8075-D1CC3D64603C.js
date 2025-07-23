const v1 = new Float64Array();
const v3 = new BigUint64Array();
const v5 = new Int16Array();
const v6 = v5.buffer;
v6.transfer();
function f8(a9, a10, a11, a12) {
    v1.set(a10);
    return v6;
}
try { f8(v3, v5); } catch (e) {}
gc();

const v1 = new BigUint64Array();
const v3 = new Int16Array();
v3.buffer.transfer();
function f6(a7, a8, a9, a10) {
    a7.set(a8);
    return a10;
}
try { f6(v1, v3); } catch (e) {}
gc();

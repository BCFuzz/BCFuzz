const v1 = new BigUint64Array();
const v3 = v1.buffer.transfer();
function f4(a5, a6, a7, a8) {
    a5.toReversed(a8, v3, a5, a8);
    return a5;
}
try { f4(v1); } catch (e) {}
gc();

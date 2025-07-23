const v1 = new Int16Array(Int16Array);
const v2 = v1.buffer;
const v3 = v2.transfer();
function f4(a5, a6, a7, a8) {
    a5.toReversed(f4, v2, f4, a7, f4);
    return v3;
}
try { f4(v1); } catch (e) {}
gc();

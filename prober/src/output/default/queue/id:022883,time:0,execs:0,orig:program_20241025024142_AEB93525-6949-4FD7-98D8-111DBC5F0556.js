const v1 = new Int8Array();
v1.buffer.transfer();
function f4(a5, a6, a7, a8) {
    a5.toReversed(a6);
    return a8;
}
try { f4(v1); } catch (e) {}
gc();

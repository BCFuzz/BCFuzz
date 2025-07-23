const v1 = new Int16Array();
v1.buffer.transfer();
function f4(a5, a6, a7, a8) {
    a5.toSorted();
    return a6;
}
try { f4(v1); } catch (e) {}
gc();

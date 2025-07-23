const v1 = new Int32Array();
v1.buffer.transfer();
function f4(a5, a6, a7, a8) {
    a6.with();
    return a7;
}
try { f4(v1, v1); } catch (e) {}
gc();

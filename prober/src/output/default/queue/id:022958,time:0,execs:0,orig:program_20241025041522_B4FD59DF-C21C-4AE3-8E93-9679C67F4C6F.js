const v1 = new Int8Array();
v1.buffer.transfer();
function f4(a5, a6, a7, a8) {
    const v9 = a5.valueOf();
    v9.set(v9);
    return a7;
}
try { f4(v1); } catch (e) {}
gc();

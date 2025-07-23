const v1 = new Uint16Array();
v1.buffer.transfer();
function f4(a5, a6, a7, a8) {
    a5.includes(a7, v1, Uint16Array);
    return a5;
}
try { f4(v1); } catch (e) {}
gc();

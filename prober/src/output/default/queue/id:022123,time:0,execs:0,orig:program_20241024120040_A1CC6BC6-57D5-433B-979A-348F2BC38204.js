const v1 = new Uint16Array();
const v2 = v1.buffer;
v2.transfer();
function f4(a5, a6, a7, a8) {
    a5.toSorted();
    return v2;
}
try { f4(v1); } catch (e) {}
gc();

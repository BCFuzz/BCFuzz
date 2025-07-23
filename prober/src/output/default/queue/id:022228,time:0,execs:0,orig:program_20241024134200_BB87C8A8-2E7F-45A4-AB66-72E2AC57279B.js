const v1 = new Uint16Array(Uint16Array, Uint16Array, Uint16Array);
const v3 = v1.buffer.transfer();
function f4(a5, a6, a7, a8) {
    a5.fill();
    return v3;
}
try { f4(v1); } catch (e) {}
gc();

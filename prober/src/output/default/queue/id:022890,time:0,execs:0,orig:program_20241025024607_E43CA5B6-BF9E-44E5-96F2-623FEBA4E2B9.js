const v1 = new Uint8ClampedArray();
v1.buffer.transfer();
function f4(a5, a6, a7, a8) {
    a5.copyWithin();
    return v1;
}
try { f4(v1); } catch (e) {}
gc();

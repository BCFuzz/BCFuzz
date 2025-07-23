const v1 = new Uint8ClampedArray();
const v3 = new Uint16Array(v1, Uint8ClampedArray);
v3.buffer.transfer();
function f6(a7, a8, a9, a10) {
    a7.set(v1);
    return f6;
}
try { f6(v3); } catch (e) {}
gc();

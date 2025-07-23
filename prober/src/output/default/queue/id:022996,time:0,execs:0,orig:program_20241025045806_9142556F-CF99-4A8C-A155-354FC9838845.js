class C1 {
}
const v3 = new Uint8ClampedArray();
const v5 = v3.buffer.transfer();
function f6(a7, a8, a9, a10) {
    a10.reverse();
    return v5;
}
try { f6(C1, "-4096", "-4096", v3); } catch (e) {}
gc();

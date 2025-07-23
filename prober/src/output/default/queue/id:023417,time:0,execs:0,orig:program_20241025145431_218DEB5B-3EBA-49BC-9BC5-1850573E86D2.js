const v1 = new Uint32Array();
const v3 = new Int8Array(v1);
v3.buffer.transfer();
function f6(a7, a8, a9, a10) {
    const v11 = a7.valueOf(f6, f6);
    return v11.fill(a8, v11, v3);
}
try { f6(v1); } catch (e) {}
gc();

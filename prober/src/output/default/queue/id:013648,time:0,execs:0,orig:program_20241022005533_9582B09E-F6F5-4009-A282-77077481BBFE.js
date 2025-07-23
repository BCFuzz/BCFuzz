const v3 = new Int8Array(9);
function f4() {
    return -32681;
}
v3.toString = f4;
v3[3] = v3;
const v5 = v3.toLocaleString();
try { Uint8Array.fromHex(v5); } catch (e) {}
gc();

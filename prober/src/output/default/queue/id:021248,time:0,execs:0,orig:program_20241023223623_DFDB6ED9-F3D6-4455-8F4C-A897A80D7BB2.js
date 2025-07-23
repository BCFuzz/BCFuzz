const o2 = {
    "maxByteLength": 1073741824,
};
const v4 = new ArrayBuffer(1622, o2);
const v6 = new Int32Array();
const v7 = new Int32Array(v4);
const v9 = new Uint8Array();
function f10(a11, a12, a13, a14) {
    a12.set(v7);
    return a11;
}
try { f10(v6, v9); } catch (e) {}
gc();

const v2 = new Int32Array();
function f3() {
    return -1;
}
v2.toString = f3;
const o6 = {
    "maxByteLength": 253,
};
const v8 = new SharedArrayBuffer(1, o6);
try { v8.grow(v2); } catch (e) {}
gc();

const o2 = {
    "maxByteLength": 65537,
};
const v4 = new ArrayBuffer(257, o2);
const v6 = new Uint8Array(v4);
function f8(a9, a10) {
    return 65537;
}
Float64Array.toString = f8;
v6[Float64Array] = Uint8Array;
gc();

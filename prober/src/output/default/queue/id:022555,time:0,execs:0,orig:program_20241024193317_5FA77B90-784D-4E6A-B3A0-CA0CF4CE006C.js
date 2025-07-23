function f1() {
    return NaN;
}
const v5 = new ArrayBuffer();
const v6 = new Uint8Array(4);
const o9 = {
    "maxByteLength": 2618008817,
};
const v11 = new SharedArrayBuffer(8, o9);
const v13 = new Int16Array(v11);
for (let i16 = 0, i17 = 10; i16 < i17; i17--) {
}
f1(f1, ...v13, v5, NaN, ...v6);
gc();

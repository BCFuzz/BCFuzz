function f0(a1, a2, a3) {
    return a2;
}
const o6 = {
    "maxByteLength": 4096,
};
const v8 = new ArrayBuffer(4096, o6);
const v10 = new Int8Array(v8);
v10.sort(f0);
gc();

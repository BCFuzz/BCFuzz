function f0(a1) {
    return a1;
}
const o4 = {
    "maxByteLength": 118,
};
const v6 = new SharedArrayBuffer(0, o4);
const v8 = new Float32Array(v6);
v8.sort(f0);
const o12 = {
    "maxByteLength": 4096,
};
const v14 = new ArrayBuffer(4096, o12);
const v16 = new Int8Array(v14);
v16[1708] = v16;
gc();

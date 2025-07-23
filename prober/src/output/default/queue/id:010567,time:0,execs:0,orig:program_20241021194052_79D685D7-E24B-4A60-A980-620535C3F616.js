function f0(a1, a2, a3) {
    return a3;
}
const o6 = {
    "maxByteLength": 268435441,
};
const v8 = new SharedArrayBuffer(56, o6);
const v10 = new Uint32Array(v8);
v10.sort(f0);
gc();

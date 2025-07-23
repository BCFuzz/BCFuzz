function f0(a1) {
    return a1;
}
const o4 = {
    "maxByteLength": 118,
};
const v6 = new SharedArrayBuffer(0, o4);
v6.grow(118);
const v9 = new Float32Array(v6);
v9.sort(f0);
gc();

function f0() {
    return f0;
}
const o3 = {
    "maxByteLength": 1403400440,
};
const v5 = new SharedArrayBuffer(64, o3);
const v7 = new Float32Array(v5);
v7["includes"](f0, "includes");
gc();

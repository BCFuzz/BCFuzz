for (let i3 = 1024, i4 = 10; i4--, 3 < i4;) {
}
const v12 = Float64Array.length;
const v13 = v12 ** v12;
const o16 = {
    "maxByteLength": 3614,
};
const v18 = new SharedArrayBuffer(3614, o16);
const v20 = new Int32Array(v18);
createGlobalObject().Atomics.wait(v20, v20, v13);
for (let i27 = 0, i28 = 512; i27 < i28; i28--) {
}
gc();

const v1 = Float64Array.length;
const v2 = v1 + v1;
const o5 = {
    "maxByteLength": 3614,
};
const v7 = new SharedArrayBuffer(3614, o5);
const v9 = new Int32Array(v7);
createGlobalObject().Atomics.wait(v9, v9, v2);
for (let i16 = 0, i17 = 10; i16 < i17; i17--) {
}
gc();

const o2 = {
    "maxByteLength": 3614,
};
const v4 = new SharedArrayBuffer(3614, o2);
const v6 = new Int16Array(v4);
createGlobalObject().Atomics.sub(v6);
gc();

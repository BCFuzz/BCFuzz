const o2 = {
    "maxByteLength": 1024,
};
const v4 = new SharedArrayBuffer(2, o2);
const v6 = new Int32Array(v4);
const t5 = createGlobalObject().Float16Array;
new t5(v6);
gc();

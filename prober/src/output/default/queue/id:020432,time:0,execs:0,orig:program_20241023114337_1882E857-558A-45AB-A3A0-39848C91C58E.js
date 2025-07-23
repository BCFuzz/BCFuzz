const o2 = {
    "maxByteLength": 4096,
};
const v4 = new ArrayBuffer(4096, o2);
const v6 = new Int8Array(v4);
const t5 = createGlobalObject().Float16Array;
new t5(v6);
gc();

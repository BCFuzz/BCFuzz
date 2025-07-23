const o2 = {
    "maxByteLength": 6,
};
const v4 = new ArrayBuffer(5, o2);
const v6 = new Float64Array(v4);
const t5 = createGlobalObject().Float16Array;
new t5(v6);
gc();

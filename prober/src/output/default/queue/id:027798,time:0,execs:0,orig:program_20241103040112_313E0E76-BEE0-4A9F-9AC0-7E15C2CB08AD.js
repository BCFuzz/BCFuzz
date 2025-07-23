const t0 = createGlobalObject().Float16Array;
const v3 = new t0();
const v5 = v3.toSorted().constructor;
const o8 = {
    "maxByteLength": 4010739806,
};
const v10 = new SharedArrayBuffer(4096, o8);
const v11 = new v5(v10, 4096, v5);
v11.sort();
gc();

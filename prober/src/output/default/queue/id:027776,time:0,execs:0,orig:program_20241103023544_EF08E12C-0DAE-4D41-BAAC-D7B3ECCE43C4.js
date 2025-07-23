const o2 = {
    "maxByteLength": 255,
};
const v4 = new SharedArrayBuffer(255, o2);
const t4 = createGlobalObject().Float16Array;
const v8 = new t4(v4);
v8.sort();
gc();

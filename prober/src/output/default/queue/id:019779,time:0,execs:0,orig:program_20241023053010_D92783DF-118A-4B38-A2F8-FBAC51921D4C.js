const v2 = 1073741824 - 1073741824;
const o3 = {
    "maxByteLength": 1073741824,
};
const v6 = createGlobalObject().Float16Array;
const v7 = new ArrayBuffer(v2, o3);
const v8 = new v6(v7);
v8.sort();
gc();

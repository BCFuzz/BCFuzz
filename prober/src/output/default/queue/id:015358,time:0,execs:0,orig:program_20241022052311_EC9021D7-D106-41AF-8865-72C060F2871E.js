const o3 = {
    "maxByteLength": 1073741824,
};
const v6 = createGlobalObject().Float16Array;
const v8 = new ArrayBuffer(1622, o3);
const v9 = new v6(v8);
v9.indexOf(-3);
gc();

const o3 = {
    "maxByteLength": 1073741824,
};
const v5 = createGlobalObject();
const v6 = v5.Float16Array;
const v8 = new ArrayBuffer(1622, o3);
const v9 = new v6(v8, v5, 5.176464613206232);
delete v9[7];
gc();

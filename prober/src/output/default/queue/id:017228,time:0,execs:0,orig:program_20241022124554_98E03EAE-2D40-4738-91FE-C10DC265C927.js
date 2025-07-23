const o2 = {
    "maxByteLength": 1073741824,
};
const v5 = createGlobalObject().Float16Array;
const v7 = new ArrayBuffer(1622, o2);
v7.resize();
const v9 = new v5(v7);
v9[652] = v9;
gc();

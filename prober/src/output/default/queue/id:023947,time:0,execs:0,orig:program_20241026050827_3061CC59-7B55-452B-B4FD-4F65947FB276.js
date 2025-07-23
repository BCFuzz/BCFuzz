const v2 = createGlobalObject().Float16Array;
const o5 = {
    "maxByteLength": 15,
};
const v7 = new SharedArrayBuffer(15, o5);
const v9 = new Int16Array(v7);
new v2(v9);
gc();

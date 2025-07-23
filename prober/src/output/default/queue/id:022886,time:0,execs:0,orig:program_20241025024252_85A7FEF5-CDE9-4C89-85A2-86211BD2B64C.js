const v2 = createGlobalObject().Float16Array;
const o5 = {
    "maxByteLength": 1000,
};
const v7 = new ArrayBuffer(1000, o5);
const v8 = new v2(v7);
new Int16Array(v8);
gc();

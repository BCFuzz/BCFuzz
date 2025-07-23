const v4 = createGlobalObject().Float16Array;
const v5 = new Int16Array();
v5.subarray(v4, v4);
const o8 = {
    "maxByteLength": 193709389,
};
const v10 = new ArrayBuffer(95, o8);
const v11 = new v4(v10);
v11.set(v5);
gc();

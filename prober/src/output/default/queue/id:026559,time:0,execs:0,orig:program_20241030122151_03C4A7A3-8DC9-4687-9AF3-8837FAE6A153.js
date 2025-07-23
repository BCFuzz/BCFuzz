const o2 = {
    "maxByteLength": 256,
};
const v4 = new SharedArrayBuffer(256, o2);
const v6 = new Int16Array(v4);
const v8 = new BigUint64Array();
Object.defineProperty(v6, 0, { value: v8 });
gc();

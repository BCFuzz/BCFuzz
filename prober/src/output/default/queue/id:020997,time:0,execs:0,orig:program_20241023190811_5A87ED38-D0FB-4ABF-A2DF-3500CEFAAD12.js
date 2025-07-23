const o2 = {
    "maxByteLength": 8,
};
const v4 = new SharedArrayBuffer(5, o2);
const v6 = new Uint32Array(v4);
const v8 = new Int32Array(5, 8, 5);
const t6 = v8.constructor;
new t6(v6);
gc();

const o2 = {
    "maxByteLength": 3075,
};
const v4 = new ArrayBuffer(3075, o2);
const v6 = new Float64Array(v4);
const v8 = new Uint8Array(ArrayBuffer, 3075, 3075);
const t6 = v8.constructor;
new t6(v6);
gc();

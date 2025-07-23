const o2 = {
    "maxByteLength": 2173319823,
};
const v4 = new ArrayBuffer(10, o2);
const v6 = new Int16Array(v4);
const v8 = new Uint8Array(o2, 10, 2173319823);
const t6 = v8.constructor;
new t6(v6);
gc();

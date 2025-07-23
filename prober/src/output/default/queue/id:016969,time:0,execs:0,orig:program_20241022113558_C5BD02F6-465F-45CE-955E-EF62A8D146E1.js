const o2 = {
    "maxByteLength": 1682438444,
};
const v4 = new ArrayBuffer(1095, o2);
const v6 = new Int8Array(v4);
const o8 = {
};
const v10 = new Proxy(Int16Array, o8);
new v10(v6);
gc();

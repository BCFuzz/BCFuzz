const o2 = {
    "maxByteLength": 1780,
};
const v4 = new ArrayBuffer(9, o2);
const v6 = new Uint16Array(v4);
new Int16Array(v6.fill());
gc();

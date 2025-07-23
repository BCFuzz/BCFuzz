const o2 = {
    "maxByteLength": 536870887,
};
const v4 = new SharedArrayBuffer(255, o2);
const v6 = new Int32Array(v4);
new Int16Array(v6);
gc();

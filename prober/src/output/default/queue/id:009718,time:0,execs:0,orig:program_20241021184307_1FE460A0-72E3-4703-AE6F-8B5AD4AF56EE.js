const o2 = {
    "maxByteLength": 119,
};
const v4 = new SharedArrayBuffer(119, o2);
const v6 = new Int32Array(v4);
v6[536870889];
gc();

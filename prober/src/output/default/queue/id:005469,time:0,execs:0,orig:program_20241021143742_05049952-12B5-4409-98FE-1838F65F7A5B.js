const o2 = {
    "maxByteLength": 1335,
};
const v4 = new SharedArrayBuffer(64, o2);
const v6 = new Uint32Array(v4);
const t5 = v6.constructor;
new t5(v6);
gc();

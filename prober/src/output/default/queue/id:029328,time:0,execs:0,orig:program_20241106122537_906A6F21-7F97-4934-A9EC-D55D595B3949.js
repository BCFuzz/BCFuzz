const o2 = {
    "maxByteLength": 106,
};
const v4 = new SharedArrayBuffer(7, o2);
const v6 = new Uint16Array(v4);
createGlobalObject().Atomics.exchange(v6);
gc();

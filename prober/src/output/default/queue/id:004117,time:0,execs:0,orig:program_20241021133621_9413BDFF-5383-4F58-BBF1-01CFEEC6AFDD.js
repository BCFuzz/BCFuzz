const o3 = {
    "maxByteLength": 536870887,
};
const v5 = new SharedArrayBuffer(129, o3);
const v7 = new DataView(v5, DataView, DataView);
try { v7.setUint8(undefined, SharedArrayBuffer); } catch (e) {}
gc();

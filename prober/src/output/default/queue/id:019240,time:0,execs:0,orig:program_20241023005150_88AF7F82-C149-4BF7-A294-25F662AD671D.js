const o2 = {
    "maxByteLength": 536870912,
};
const v4 = new SharedArrayBuffer(5, o2);
const v6 = new Uint8Array(v4);
try { v6.sort(SharedArrayBuffer); } catch (e) {}
gc();

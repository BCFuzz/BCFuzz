const o3 = {
    "maxByteLength": 536870887,
};
const v5 = new SharedArrayBuffer(129, o3);
try { new Uint32Array(v5, 31737); } catch (e) {}
gc();

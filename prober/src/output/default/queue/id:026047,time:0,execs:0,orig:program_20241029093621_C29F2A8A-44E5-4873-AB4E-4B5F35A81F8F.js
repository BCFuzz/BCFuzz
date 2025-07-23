const o4 = {
    "maxByteLength": 2329388498,
};
const v6 = new ArrayBuffer(7, o4);
const v8 = new Float64Array(v6);
try { v8.__defineGetter__(10000n, Uint8ClampedArray); } catch (e) {}
gc();

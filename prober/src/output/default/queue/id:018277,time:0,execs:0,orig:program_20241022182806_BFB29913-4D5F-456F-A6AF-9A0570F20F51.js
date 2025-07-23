const v1 = new Float64Array(Float64Array);
const o4 = {
    "maxByteLength": 536870887,
};
const v6 = new SharedArrayBuffer(129, o4);
const v8 = v1.constructor;
try { new v8(v6, 11); } catch (e) {}
gc();

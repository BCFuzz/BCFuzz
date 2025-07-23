const o6 = {
    "maxByteLength": 824,
};
const v8 = new ArrayBuffer(19, o6);
const v9 = new Uint16Array(v8, Int16Array, 3);
try { v9.some(Float32Array); } catch (e) {}
gc();

let v1;
try { v1 = Uint32Array.call(); } catch (e) {}
const o4 = {
    "maxByteLength": 11,
};
const v6 = new SharedArrayBuffer(11, o4);
const v8 = new Int16Array(v6);
v8.constructor = v1;
v8.subarray();
gc();

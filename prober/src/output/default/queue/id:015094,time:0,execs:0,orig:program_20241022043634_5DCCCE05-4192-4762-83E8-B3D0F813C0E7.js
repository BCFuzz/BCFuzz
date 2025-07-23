const o1 = {
};
const o4 = {
    "maxByteLength": 64,
};
const v5 = new ArrayBuffer(o1, o4);
let v7;
try { v7 = Float32Array(); } catch (e) {}
const v8 = new Float32Array(v5, v7, "function");
v8[7];
gc();

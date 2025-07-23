const v2 = ArrayBuffer.prototype;
try { v2.resize(); } catch (e) {}
const o5 = {
    "maxByteLength": 4096,
};
const v7 = new ArrayBuffer(4096, o5);
v7.resize(NaN);
gc();

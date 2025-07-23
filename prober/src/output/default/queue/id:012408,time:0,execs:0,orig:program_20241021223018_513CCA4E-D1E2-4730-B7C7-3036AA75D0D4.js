const v1 = new Int16Array();
const v3 = new WeakSet(v1);
const o6 = {
    "maxByteLength": 65537,
};
const v8 = new ArrayBuffer(3349, o6);
const v10 = new DataView(v8, v1, v3);
try { v10.setUint32(3349, 65537); } catch (e) {}
gc();

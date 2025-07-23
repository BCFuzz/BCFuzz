const o3 = {
    "maxByteLength": 1637,
};
const v5 = new ArrayBuffer(9, o3);
const v7 = new DataView(v5);
try { v7.getInt8(Infinity); } catch (e) {}
gc();

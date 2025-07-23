const o2 = {
    "maxByteLength": 16,
};
const v4 = new ArrayBuffer(2, o2);
v4.transferToFixedLength();
try { v4.resize(); } catch (e) {}
gc();

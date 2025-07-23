const v0 = /\P{Decimal_Number}a||bc[\P{gc=Decimal_Number}]/mdisu;
const o3 = {
    "maxByteLength": 1637,
};
const v5 = new ArrayBuffer(9);
const v7 = new DataView(v5, DataView, v0);
try { v7.getInt32(); } catch (e) {}
gc();

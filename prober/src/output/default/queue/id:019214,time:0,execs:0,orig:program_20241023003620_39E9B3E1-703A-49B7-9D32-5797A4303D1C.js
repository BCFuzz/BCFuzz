const v2 = new Int16Array();
const v3 = v2.buffer;
const v4 = v3.transferToFixedLength(v3);
try { v4.slice("undefined", v2); } catch (e) {}
gc();

const v2 = new SharedArrayBuffer();
const v4 = new Int16Array(119, 119, 119);
const v5 = v4.constructor;
try { new v5(v2, 119, 119); } catch (e) {}
gc();

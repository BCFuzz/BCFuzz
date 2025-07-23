const v2 = new SharedArrayBuffer();
const v4 = new Float64Array();
const v5 = v4.constructor;
try { new v5(v2, -803694845); } catch (e) {}
gc();

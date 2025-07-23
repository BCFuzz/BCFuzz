const v1 = new Date();
const v4 = new Int32Array(v1, "symbol", v1);
try { v4.set("symbol", v1); } catch (e) {}
gc();

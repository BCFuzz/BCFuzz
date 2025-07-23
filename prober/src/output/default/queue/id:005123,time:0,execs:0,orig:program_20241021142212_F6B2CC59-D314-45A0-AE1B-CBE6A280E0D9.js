const v1 = -5007 + -5007;
const v3 = new Int32Array();
try { v3.with(v1); } catch (e) {}
gc();

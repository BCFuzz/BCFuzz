const v1 = ("e").bold();
const v3 = new Int16Array();
v3.constructor = v1;
try { v3.slice(); } catch (e) {}
gc();

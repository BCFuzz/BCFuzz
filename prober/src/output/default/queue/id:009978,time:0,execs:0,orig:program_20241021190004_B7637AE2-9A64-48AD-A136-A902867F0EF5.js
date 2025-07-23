const v2 = new Int32Array();
const v3 = v2.indexOf;
try { v3.call("129"); } catch (e) {}
gc();

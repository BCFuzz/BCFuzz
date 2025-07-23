const v2 = new Int16Array();
const v3 = v2.copyWithin;
try { v3.call("I"); } catch (e) {}
gc();

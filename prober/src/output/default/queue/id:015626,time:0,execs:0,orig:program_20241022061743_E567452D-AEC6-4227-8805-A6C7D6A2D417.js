const v2 = new WeakSet();
const v3 = v2.add;
try { v3.call("c"); } catch (e) {}
gc();

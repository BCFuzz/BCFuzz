const v2 = new Int8Array(3593);
const v3 = v2.__proto__;
try { v2.toLocaleString(v3); } catch (e) {}
gc();

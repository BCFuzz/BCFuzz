const v1 = new Set();
const v2 = v1.__proto__;
try { v2.keys(); } catch (e) {}
gc();

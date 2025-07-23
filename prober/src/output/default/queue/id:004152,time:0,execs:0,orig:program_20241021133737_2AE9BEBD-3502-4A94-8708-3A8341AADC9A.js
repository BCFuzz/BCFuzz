const v1 = new Float64Array();
const v2 = v1.__proto__;
try { v2.reverse(v1, v2, v2, Float64Array); } catch (e) {}
gc();

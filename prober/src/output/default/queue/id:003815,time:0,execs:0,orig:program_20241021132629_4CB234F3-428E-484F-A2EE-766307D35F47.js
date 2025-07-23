const v1 = Symbol.toPrimitive;
const v2 = [v1,v1];
try { v2.join(v1); } catch (e) {}
gc();

const v2 = Symbol.hasInstance.__proto__;
try { v2.valueOf(); } catch (e) {}
gc();

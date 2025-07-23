const v2 = ReferenceError(ReferenceError).toString;
try { v2(); } catch (e) {}
gc();

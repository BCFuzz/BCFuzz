const v2 = Symbol.toPrimitive.description;
try { v2.replaceAll(v2, Symbol); } catch (e) {}
gc();

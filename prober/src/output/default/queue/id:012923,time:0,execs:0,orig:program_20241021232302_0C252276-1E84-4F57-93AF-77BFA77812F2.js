const v2 = ("string").toWellFormed;
v2[Symbol.toPrimitive] = Symbol;
try { v2.apply(v2); } catch (e) {}
gc();

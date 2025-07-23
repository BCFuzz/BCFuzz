const v3 = Symbol.toPrimitive.description.includes;
v3.toString = Symbol;
const v5 = new BigInt64Array(Symbol);
try { v5.copyWithin(v3); } catch (e) {}
gc();

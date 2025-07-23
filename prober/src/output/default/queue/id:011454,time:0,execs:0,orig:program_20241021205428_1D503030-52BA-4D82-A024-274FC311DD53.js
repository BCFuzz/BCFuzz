const v2 = Symbol.toPrimitive;
const v3 = new WeakSet();
v3.add(v2);
gc();

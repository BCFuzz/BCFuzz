const v1 = Symbol.toPrimitive;
const v4 = new FinalizationRegistry(Int8Array);
v4.register(v1);
gc();

const v1 = Symbol.toPrimitive;
const t1 = createGlobalObject().WeakRef;
new t1(v1);
gc();

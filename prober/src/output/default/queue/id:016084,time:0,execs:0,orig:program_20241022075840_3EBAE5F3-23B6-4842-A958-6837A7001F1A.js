const v1 = Symbol.isConcatSpreadable;
const v3 = new WeakMap();
v3.set(v1);
gc();

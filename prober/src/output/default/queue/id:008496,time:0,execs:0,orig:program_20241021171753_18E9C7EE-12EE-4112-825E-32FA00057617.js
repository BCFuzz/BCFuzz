const v1 = new WeakMap();
const v5 = createGlobalObject().Float16Array;
const v6 = new v5(v5);
v6.with(undefined, v1);
gc();

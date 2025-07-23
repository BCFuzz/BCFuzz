const v1 = new WeakMap();
const v2 = WeakMap !== v1;
v1.delete() != v2;
gc();

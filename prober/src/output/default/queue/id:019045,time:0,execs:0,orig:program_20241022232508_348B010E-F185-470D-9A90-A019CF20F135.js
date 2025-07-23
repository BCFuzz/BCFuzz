const t0 = createGlobalObject().Float16Array;
const v5 = new t0(8);
v5[Symbol.toPrimitive] = Boolean;
v5[6] = v5;
v5.toSorted(Boolean);
gc();

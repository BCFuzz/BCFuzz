const v2 = Array(3408);
const v6 = [7 << 7,7,3408];
Reflect.apply(v2.copyWithin, v2, v6);
gc();

const v2 = Array(Array);
v2[641] = Int8Array;
const v4 = [Array,Array,Array,Array];
const v6 = Reflect.apply(v2.copyWithin, v2, v4);
const v7 = v6.concat();
v7.shift(v6, v7, v4, v6, Reflect);
gc();

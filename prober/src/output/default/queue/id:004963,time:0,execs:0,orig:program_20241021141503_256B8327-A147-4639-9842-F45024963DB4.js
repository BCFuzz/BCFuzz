const v0 = [16,-16,-2792,-268435456,6,128,129,-65537];
const v2 = new Int32Array();
const v5 = Array(3408, v0);
v5[1327] = v2;
const v7 = [Int32Array,Int32Array];
const v9 = Reflect.apply(v5.copyWithin, v5, v7);
v9.concat(v9);
gc();

const v2 = new Int16Array();
const v3 = new Int16Array();
const v5 = [Int16Array,Int16Array];
Reflect.apply(v3.copyWithin, v2, v5).fill().join("NEGATIVE_INFINITY");
gc();

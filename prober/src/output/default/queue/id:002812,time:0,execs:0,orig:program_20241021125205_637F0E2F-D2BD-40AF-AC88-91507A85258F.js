const v1 = new Int16Array();
const v2 = new Int16Array(v1, Int16Array, Int16Array);
const v4 = [v2];
const v5 = v2.copyWithin;
Reflect.apply(v5, v1, v4).lastIndexOf(v2, v5, v2);
gc();

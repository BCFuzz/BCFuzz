const v1 = new Int16Array(Int16Array, Int16Array, Int16Array);
const v2 = new Int16Array(v1, v1);
const v4 = [v2,v2,v2];
Reflect.apply(v2.copyWithin, v1, v4).set(-536870912n);
gc();

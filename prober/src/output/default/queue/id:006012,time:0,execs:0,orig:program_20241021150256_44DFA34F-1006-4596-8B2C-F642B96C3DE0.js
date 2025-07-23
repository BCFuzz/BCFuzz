const v2 = new BigUint64Array(2);
const v4 = [v2,2];
Reflect.apply(v2.includes, v2, v4);
gc();

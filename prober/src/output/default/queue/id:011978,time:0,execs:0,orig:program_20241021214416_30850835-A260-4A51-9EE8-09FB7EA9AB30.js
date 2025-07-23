const v2 = new BigInt64Array(1000);
const v4 = [Reflect,Reflect,Reflect];
Reflect.apply(v4.flat, v2, v4);
gc();

const v1 = [BigInt64Array,BigInt64Array];
const v3 = new BigInt64Array(256);
Reflect.defineProperty(v3, 127, v1);
gc();

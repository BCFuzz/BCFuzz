const v1 = new Uint16Array(Uint16Array, Uint16Array, Uint16Array);
const v2 = v1.constructor;
const v4 = new Int16Array(v1, v2, v2);
const v5 = new Int16Array(v2, v2);
Reflect.apply(v5.copyWithin, v4, v2);
gc();

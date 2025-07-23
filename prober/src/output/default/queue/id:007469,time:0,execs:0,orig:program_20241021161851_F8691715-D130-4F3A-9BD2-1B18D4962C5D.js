const v1 = Symbol.toPrimitive;
const v4 = [Symbol.iterator];
Reflect.apply(Symbol.keyFor, v1, v4);
gc();

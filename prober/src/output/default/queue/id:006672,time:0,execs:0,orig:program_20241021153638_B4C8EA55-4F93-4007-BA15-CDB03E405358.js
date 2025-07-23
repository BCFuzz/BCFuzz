Date.toString = Date;
const v3 = [false,10000n,Date];
Object.defineProperty(v3, Symbol.toPrimitive, { writable: true, enumerable: true, value: Date });
v3.join(v3);
gc();

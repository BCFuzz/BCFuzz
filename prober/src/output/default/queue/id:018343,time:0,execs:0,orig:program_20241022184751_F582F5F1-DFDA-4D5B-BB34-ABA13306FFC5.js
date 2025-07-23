const v3 = new BigUint64Array(128);
v3.buffer /= NaN;
const v4 = new BigUint64Array();
Object.defineProperty(v3, 1, { writable: true, configurable: true, value: v4 });
gc();

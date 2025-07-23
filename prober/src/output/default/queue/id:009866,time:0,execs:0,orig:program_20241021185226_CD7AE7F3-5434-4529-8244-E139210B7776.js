const v0 = [129,268435440,1577921203];
const v2 = String.prototype;
Object.defineProperty(v2, Symbol.toPrimitive, { configurable: true, enumerable: true, value: v0 });
try { new BigUint64Array(v2); } catch (e) {}
gc();

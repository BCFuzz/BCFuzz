Object.defineProperty(BigInt64Array, Symbol.toPrimitive, { configurable: true, enumerable: true, value: Date });
const v6 = new Int16Array(129);
([...v6,BigInt64Array]).sort();
gc();

Object.defineProperty(BigInt64Array, 0, { writable: true, value: -9007199254740990n });
const v4 = new Int8Array(120);
try { v4.set(BigInt64Array); } catch (e) {}
gc();

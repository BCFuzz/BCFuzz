Object.defineProperty(Int16Array, 2, { writable: true, configurable: true, enumerable: true, value: -4n });
const v3 = new Int16Array(83);
try { v3.set(Int16Array); } catch (e) {}
gc();

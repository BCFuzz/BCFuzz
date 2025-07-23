const v2 = new WeakSet();
Object.defineProperty(v2, Symbol.toPrimitive, { configurable: true, value: ensureArrayStorage });
Math.abs(v2);
gc();

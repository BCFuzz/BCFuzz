const v1 = Symbol.toPrimitive;
const v3 = new Uint8ClampedArray(Symbol, v1, v1);
try { v3.set(v3, v1); } catch (e) {}
gc();

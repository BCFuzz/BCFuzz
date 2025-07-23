const v1 = Symbol.toPrimitive;
const v3 = new Uint8Array(Symbol, Uint8Array);
try { v3.toBase64(v1); } catch (e) {}
gc();

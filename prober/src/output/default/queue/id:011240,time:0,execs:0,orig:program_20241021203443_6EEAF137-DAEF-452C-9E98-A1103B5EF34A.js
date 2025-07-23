const v1 = new ArrayBuffer();
Int16Array.toString = Symbol;
const v4 = new Int16Array(Symbol, ArrayBuffer, v1);
const v5 = v4.toReversed();
try { v5.with(v1, Int16Array); } catch (e) {}
gc();

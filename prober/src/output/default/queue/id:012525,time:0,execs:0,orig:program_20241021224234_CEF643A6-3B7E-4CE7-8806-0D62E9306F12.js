const v1 = new ArrayBuffer();
Symbol.toString = Symbol;
const v4 = new DataView(v1);
try { v4.setInt16(Symbol); } catch (e) {}
gc();

const v2 = Symbol.iterator.description;
const v4 = new Uint32Array();
const v5 = v4.set;
try { v5.apply(v2); } catch (e) {}
gc();

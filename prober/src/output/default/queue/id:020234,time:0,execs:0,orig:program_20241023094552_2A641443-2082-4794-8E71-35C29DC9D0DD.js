Object.defineProperty(Map, "toString", { configurable: true, value: Symbol });
const v2 = new Map();
const v3 = v2.entries();
v3.length = Map;
const v5 = new Int32Array(v3, v2, Symbol);
try { v5.set(v3); } catch (e) {}
gc();

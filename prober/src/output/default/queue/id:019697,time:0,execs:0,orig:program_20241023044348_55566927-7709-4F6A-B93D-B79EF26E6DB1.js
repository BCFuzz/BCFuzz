Object.defineProperty(Map, "toString", { configurable: true, value: Symbol });
const v2 = new Map();
const v3 = v2.entries();
v3.length = Map;
const v5 = new Float32Array(Symbol, Float32Array, Float32Array);
try { v5.set(v3); } catch (e) {}
gc();

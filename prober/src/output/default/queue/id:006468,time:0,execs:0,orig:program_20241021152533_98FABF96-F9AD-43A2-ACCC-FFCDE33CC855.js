const v1 = Symbol.isConcatSpreadable;
const v3 = [[Symbol,Symbol,Symbol,Symbol]];
const v5 = new WeakMap();
const v6 = v5.get;
try { v3.every(v6, v1); } catch (e) {}
gc();

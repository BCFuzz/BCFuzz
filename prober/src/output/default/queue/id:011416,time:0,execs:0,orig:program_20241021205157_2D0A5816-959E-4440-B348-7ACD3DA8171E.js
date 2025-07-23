const v1 = [Array];
Object.defineProperty(v1, Symbol.toPrimitive, { value: Array });
const v6 = [904623.0599490013,904623.0599490013];
v6.style = v1;
const v7 = ["YlW",904623.0599490013];
try { v7.toLocaleString("YlW", v6); } catch (e) {}
gc();

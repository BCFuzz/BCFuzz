const v1 = [];
Object.defineProperty(v1, 2, { writable: true, value: Int16Array });
try {
const t0 = 4294967296;
t0(...v1);
} catch (e) {}
gc();

const v1 = new Float64Array(Float64Array);
const v4 = new Uint16Array(4);
const v7 = new Int16Array(2);
try { v1(...v4, ...v4, ...v7); } catch (e) {}
gc();

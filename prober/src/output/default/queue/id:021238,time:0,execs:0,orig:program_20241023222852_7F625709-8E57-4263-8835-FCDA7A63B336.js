const v1 = new Date(Date);
const v2 = v1.toLocaleTimeString;
const v5 = new Float64Array(4);
try { v5.find(v2); } catch (e) {}
gc();

const v1 = new Date(Date);
const v2 = v1.getTimezoneOffset;
const v4 = Float32Array.from(Date);
try { v4.sort(v2); } catch (e) {}
gc();

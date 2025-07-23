const v3 = new Int8Array(254);
const v4 = v3.with();
try { v4.fill(v3, 2078378580n); } catch (e) {}
gc();

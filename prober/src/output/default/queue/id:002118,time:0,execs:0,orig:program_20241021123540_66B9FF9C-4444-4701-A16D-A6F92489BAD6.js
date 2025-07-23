const v2 = new Set();
v2.add(SharedArrayBuffer);
new Set(v2);
gc();

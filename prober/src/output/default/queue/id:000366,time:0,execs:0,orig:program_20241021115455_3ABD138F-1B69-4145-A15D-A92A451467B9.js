const v3 = 2345 >> (257 & 257);
const v5 = new WeakSet();
v5.has(v3);
gc();

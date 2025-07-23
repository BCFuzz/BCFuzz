const v1 = new Set();
const v3 = v1.union(v1).entries();
v3.next();
v3.next();
gc();

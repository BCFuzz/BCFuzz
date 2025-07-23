const v1 = new Map();
const v2 = v1.values();
v2.next();
v2.next();
gc();

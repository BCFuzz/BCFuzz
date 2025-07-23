const v1 = new WeakSet();
const v2 = [1000000000.0,-3.0,4.0];
v2[3] = WeakSet;
v2["forEach"](ensureArrayStorage);
v2.splice(735947919, 2147483648, v1);
gc();

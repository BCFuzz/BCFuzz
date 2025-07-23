const v2 = createGlobalObject();
const v3 = v2.Float16Array;
const v4 = new v3(v2, 2147483647n, v3, 2147483647n);
try { v4.copyWithin(2147483647n); } catch (e) {}
for (let i8 = 0, i9 = 10; i9; i9--) {
}
gc();

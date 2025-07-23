const v1 = [WeakSet];
const v2 = new WeakSet(v1);
for (let i4 = 0, i5 = v2; i5.delete(WeakSet), i4 < v1;) {
}
gc();

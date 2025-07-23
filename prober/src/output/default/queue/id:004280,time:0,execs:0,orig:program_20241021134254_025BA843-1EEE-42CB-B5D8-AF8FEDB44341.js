const v1 = new WeakMap();
class C2 extends WeakMap {
}
const v3 = new C2();
v3.has(v1[8]);
for (let i8 = 0, i9 = 10; i8 < i9; i9--) {
}
gc();

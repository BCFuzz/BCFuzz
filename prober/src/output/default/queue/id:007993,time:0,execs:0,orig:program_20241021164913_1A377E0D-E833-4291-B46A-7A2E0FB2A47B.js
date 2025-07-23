class C1 {
}
const v2 = new C1();
const v5 = new WeakMap();
v5.set(WeakMap);
v5.set(v5).get(v2);
gc();

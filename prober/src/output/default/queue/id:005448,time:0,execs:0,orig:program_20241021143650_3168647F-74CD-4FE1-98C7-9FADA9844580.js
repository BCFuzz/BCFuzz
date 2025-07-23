let v1 = new WeakMap();
class C2 extends WeakMap {
    n(a4, a5) {
        [...v1] = arguments;
    }
}
const v7 = new C2();
v7.set(v7, v1);
const v9 = new C2();
v9.n();
gc();

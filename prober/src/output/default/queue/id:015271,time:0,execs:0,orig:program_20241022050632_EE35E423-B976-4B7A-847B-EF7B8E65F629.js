class C2 {
}
const v3 = new C2();
const v6 = Symbol.for().description;
class C7 extends WeakMap {
    o(a9, a10, a11) {
        super.a = this;
        v3[a9] <<= 1000.0;
    }
}
const v12 = new C7();
v12.o(v6);
const v14 = v12.o;
try { v14(); } catch (e) {}
gc();

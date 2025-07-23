function f1() {
    return f1;
}
class C2 extends f1 {
    static n(a4, a5) {
        Reflect.construct(a4);
    }
}
try { C2.n(Int8Array); } catch (e) {}
gc();

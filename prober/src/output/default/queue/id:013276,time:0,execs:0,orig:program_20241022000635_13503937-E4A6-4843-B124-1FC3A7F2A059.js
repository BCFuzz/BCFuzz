function f0() {
    return f0;
}
class C1 extends f0 {
}
class C2 {
    constructor(a4, a5, a6) {
        new a4();
        noInline(f0);
    }
}
new C2(C1);
new C2(f0);
gc();

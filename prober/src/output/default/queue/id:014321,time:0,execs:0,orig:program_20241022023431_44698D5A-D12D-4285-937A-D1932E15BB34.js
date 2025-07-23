function f0() {
    return f0;
}
class C1 extends f0 {
}
class C2 {
    constructor(a4, a5, a6) {
        const v7 = new a4(a4, a4);
        v7();
        noInline(f0);
    }
}
new C2(C1);
new C2(f0);
gc();

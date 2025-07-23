class C0 {
    get c() {
        arguments.callee;
    }
    m(a5, a6) {
        this.c %= a5;
    }
}
const v7 = new C0();
try { v7.m(); } catch (e) {}
gc();

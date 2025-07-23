gc();
class C2 {
    get c() {
        arguments.callee;
    }
    m(a7, a8) {
        this.c %= a7;
    }
}
const v9 = new C2();
try { v9.m(); } catch (e) {}
gc();

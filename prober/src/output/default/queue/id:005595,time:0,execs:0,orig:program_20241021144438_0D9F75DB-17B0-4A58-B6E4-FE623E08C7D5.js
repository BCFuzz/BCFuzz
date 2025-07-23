let v0 = 4096n;
class C1 {
    constructor(a3, a4, a5, a6) {
        v0 %= a5;
    }
}
try { new C1(); } catch (e) {}
gc();

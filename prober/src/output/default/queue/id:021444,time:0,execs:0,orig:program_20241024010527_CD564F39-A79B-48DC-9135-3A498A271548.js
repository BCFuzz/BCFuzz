function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    class C5 extends Date {
    }
    const v6 = new C5();
    new C5(v6.toLocaleString());
}
new F0(F0, F0);
gc();

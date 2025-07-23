for (let v0 = 0; v0 < 100; v0++) {
    class C1 {
        n(a3, a4) {
            a3();
            function f6(a7, a8, a9) {
            }
            return f6();
        }
    }
    function f11(a12) {
        return a12;
    }
    const v13 = new C1();
    v13.n(f11);
    const v15 = new C1();
    try { v15.n(); } catch (e) {}
}
gc();

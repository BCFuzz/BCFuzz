for (let v0 = 0; v0 < 50; v0++) {
    class C1 {
    }
    const v2 = new C1();
    function f3(a4, a5, a6, a7) {
        try { a5(v2, a6); } catch (e) {}
        return f3;
    }
    f3(v2, f3, C1);
}
gc();

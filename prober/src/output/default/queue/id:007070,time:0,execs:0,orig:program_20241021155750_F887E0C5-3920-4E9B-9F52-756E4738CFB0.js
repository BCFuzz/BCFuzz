for (let v0 = 0; v0 < 50; v0++) {
    function f1(a2, a3, a4) {
        try { a3(); } catch (e) {}
        return a3;
    }
    f1(v0, f1);
}
gc();

for (let v0 = 0; v0 < 100; v0++) {
    function* f1(a2, a3, a4, a5) {
        return f1;
    }
    const v6 = f1(f1, f1, v0, f1);
    try { v6.throw(); } catch (e) {}
}
gc();

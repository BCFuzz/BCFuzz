for (let v0 = 0; v0 < 100; v0++) {
    const v1 = /a\nW/vgi;
    function f2(a3, a4, a5, a6) {
        a3.test(a3);
        return a5;
    }
    try { f2(); } catch (e) {}
    f2(v1);
}
gc();

for (let v0 = 0; v0 < 100; v0++) {
    const v1 = /a\nW/vgi;
    function f2(a3, a4, a5, a6) {
        a3.toString();
        a3.exec(a6);
        return f2;
    }
    const v9 = f2(v1);
    try { v9(f2); } catch (e) {}
}
gc();

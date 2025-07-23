for (let v1 = 0; v1 < 5; v1++) {
    const v2 = /a\nW/vgi;
    function f3(a4, a5, a6, a7) {
        a4.test("b");
        return v2;
    }
    try { f3(f3, "b", f3, "b"); } catch (e) {}
    f3(v2);
}
gc();

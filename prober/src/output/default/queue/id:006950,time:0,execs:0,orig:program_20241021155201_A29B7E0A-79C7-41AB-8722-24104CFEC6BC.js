const v0 = [];
for (let v2 = 0; v2 < 50; v2++) {
    class C3 {
    }
    const v4 = new C3();
    function f5(a6, a7, a8, a9) {
        try { a7(6, v0); } catch (e) {}
        return a6;
    }
    f5(v4, f5);
}
gc();

for (let v0 = 0; v0 < 250; v0++) {
    function f1() {
        return f1;
    }
    function f2(a3, a4) {
        a3.arguments;
        return f1;
    }
    try { f2(); } catch (e) {}
    f2(f1);
}
gc();

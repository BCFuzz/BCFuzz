function f1() {
    const v4 = new Set();
    v4.add(v4);
    function f6() {
        return f1;
    }
    const v7 = f6.apply(0, arguments);
    try { v7(); } catch (e) {}
}
f1();
gc();

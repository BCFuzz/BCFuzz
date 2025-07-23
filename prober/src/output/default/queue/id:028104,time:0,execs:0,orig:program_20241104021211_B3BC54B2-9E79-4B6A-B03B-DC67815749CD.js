function f1() {
    const v4 = new WeakSet();
    v4.add(SharedArrayBuffer);
    function f6() {
        return f1;
    }
    const v7 = f6.apply(f6, arguments);
    try { v7(); } catch (e) {}
    return f1;
}
f1();
gc();

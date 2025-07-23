function f0() {
    const v4 = new Set();
    v4.add(SharedArrayBuffer);
    function f6() {
        return f0;
    }
    const v7 = f6.apply(f6, arguments);
    try { v7(); } catch (e) {}
    return f0;
}
f0();
gc();

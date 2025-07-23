function f0() {
    new String();
    function f4() {
        return f0;
    }
    const v5 = f4.apply(f4, arguments);
    try { v5(); } catch (e) {}
    return f0;
}
f0();
gc();

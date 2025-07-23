function f0() {
    const v5 = 16 ** null;
    Math.sqrt(v5);
    function f7() {
        return f0;
    }
    const v8 = f7.apply(f7, arguments);
    try { v8(f0, v5, Math, f0); } catch (e) {}
    return v5;
}
f0();
gc();

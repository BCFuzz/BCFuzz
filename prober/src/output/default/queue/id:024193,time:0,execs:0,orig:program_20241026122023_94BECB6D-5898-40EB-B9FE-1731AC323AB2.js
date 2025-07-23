function f0() {
    const v2 = arguments[1757];
    function f3() {
        return f0;
    }
    const v4 = f3.apply(v2, v2);
    try { v4(v4); } catch (e) {}
    return arguments;
}
f0();
gc();

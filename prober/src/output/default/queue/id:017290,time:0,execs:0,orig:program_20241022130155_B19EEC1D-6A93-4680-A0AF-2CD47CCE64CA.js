function f1() {
    function f3() {
        return f1;
    }
    const v4 = f3.apply(BigInt64Array, arguments);
    try { v4(); } catch (e) {}
    return f3;
}
f1();
gc();

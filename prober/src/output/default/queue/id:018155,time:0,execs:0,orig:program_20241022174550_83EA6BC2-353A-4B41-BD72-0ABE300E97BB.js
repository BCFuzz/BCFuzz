function f1() {
    new String();
    function f5() {
        return f1;
    }
    const v6 = f5.apply(BigInt64Array, arguments);
    try { v6(); } catch (e) {}
    return BigInt64Array;
}
f1();
gc();

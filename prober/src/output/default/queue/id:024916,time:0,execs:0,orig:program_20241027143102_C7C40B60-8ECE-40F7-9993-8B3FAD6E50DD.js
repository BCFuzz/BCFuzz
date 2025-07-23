function f1() {
    const v5 = ("-789426228").constructor.fromCharCode(12);
    function f7() {
        return f1;
    }
    const v8 = f7.apply(BigInt64Array, arguments);
    try { v8(); } catch (e) {}
    return v5;
}
f1();
gc();

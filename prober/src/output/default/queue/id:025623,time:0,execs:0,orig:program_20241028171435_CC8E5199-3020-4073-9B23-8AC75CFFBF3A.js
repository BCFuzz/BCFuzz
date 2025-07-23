function f2() {
    const v5 = ("stack").constructor.fromCharCode(-2.220446049250313e-16);
    function f7() {
        return f2;
    }
    const v8 = f7.apply(BigInt64Array, arguments);
    try { v8(); } catch (e) {}
    return v5;
}
f2();
gc();

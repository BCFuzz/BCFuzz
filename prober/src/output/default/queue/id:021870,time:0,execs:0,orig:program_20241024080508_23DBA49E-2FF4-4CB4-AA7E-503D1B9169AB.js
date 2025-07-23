function f1() {
    function f3() {
        return f1;
    }
    const v5 = [1000.0,Infinity,-0.0,1e-15];
    v5["indexOf"](2.220446049250313e-16);
    const v8 = f3.apply(BigInt64Array, arguments);
    try { v8(); } catch (e) {}
    return v5;
}
f1();
gc();

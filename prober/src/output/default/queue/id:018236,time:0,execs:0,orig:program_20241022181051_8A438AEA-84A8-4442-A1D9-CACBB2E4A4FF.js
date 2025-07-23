function f1() {
    let v3 = "snI";
    v3 += "function";
    function f5() {
        return f1;
    }
    const v6 = f5.apply(BigInt64Array, arguments);
    try { v6(); } catch (e) {}
    return "function";
}
f1();
gc();

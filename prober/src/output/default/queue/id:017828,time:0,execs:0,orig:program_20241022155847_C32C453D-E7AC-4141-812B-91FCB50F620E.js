function f1() {
    new Float64Array([-11,268435440,9]);
    function f6() {
        return f1;
    }
    const v7 = f6.apply(BigInt64Array, arguments);
    let v8;
    try { v8 = v7(); } catch (e) {}
    return v8;
}
f1();
gc();

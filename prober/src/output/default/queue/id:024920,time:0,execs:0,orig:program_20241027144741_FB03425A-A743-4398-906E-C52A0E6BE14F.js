function f1() {
    const v3 = new Float64Array();
    const v7 = (-65536 % v3) << -65536;
    const v8 = v7 & -65536;
    v3[3] = 4294967296 - v8;
    function f11() {
        return f1;
    }
    const v12 = f11.apply(BigInt64Array, arguments);
    try { v12(Float64Array, v8, f1, v12); } catch (e) {}
    return v7;
}
f1();
gc();

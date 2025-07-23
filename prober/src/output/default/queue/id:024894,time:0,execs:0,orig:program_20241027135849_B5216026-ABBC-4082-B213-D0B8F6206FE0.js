function f2() {
    const v4 = new Float64Array();
    v4[3] = 4294967296 - (((-65536 % 95) << -65536) & -65536);
    function f12() {
        return f2;
    }
    const v13 = f12.apply(BigInt64Array, arguments);
    try { v13(); } catch (e) {}
    return f12;
}
f2();
gc();

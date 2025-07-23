function f1() {
    const v4 = new Uint8Array(2147483648);
    try { new BigInt64Array(v4); } catch (e) {}
    const v8 = new Float64Array();
    const t4 = v8.subarray();
    t4[4] = 0;
    function f10() {
        return f1;
    }
    const v11 = f10.apply(BigInt64Array);
    try { v11(); } catch (e) {}
    return f10;
}
f1();
gc();

function f1() {
    const v4 = new Uint8Array(2147483648);
    let v5;
    try { v5 = new BigInt64Array(v4); } catch (e) {}
    function f6() {
        return f1;
    }
    const v7 = f6.apply(v5, BigInt64Array, v4, v4);
    let v8;
    try { v8 = v7(Uint8Array, 2147483648, v5, f6); } catch (e) {}
    return v8;
}
f1();
gc();

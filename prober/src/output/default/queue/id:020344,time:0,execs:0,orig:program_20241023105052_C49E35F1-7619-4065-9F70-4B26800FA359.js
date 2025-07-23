function f1() {
    const v3 = new Float64Array();
    this.constructor.getOwnPropertySymbols(v3);
    function f8() {
        return f1;
    }
    const v9 = f8.apply(BigInt64Array, arguments);
    try { v9(v9, BigInt64Array, BigInt64Array, v9); } catch (e) {}
    return BigInt64Array;
}
f1();
gc();

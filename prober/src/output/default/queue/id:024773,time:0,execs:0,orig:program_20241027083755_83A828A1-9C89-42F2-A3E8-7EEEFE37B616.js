function f1() {
    const v3 = new Float64Array(BigInt64Array, f1);
    typeof v3 === "number";
    function f8() {
        return f1;
    }
    const v9 = f8.apply(BigInt64Array, arguments);
    try { v9(); } catch (e) {}
}
f1();
gc();

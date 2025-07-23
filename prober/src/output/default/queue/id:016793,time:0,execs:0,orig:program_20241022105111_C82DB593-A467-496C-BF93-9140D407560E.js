function f0() {
    return f0;
}
let v2 = new BigInt64Array(f0);
for (let v3 = 0; v3 < 5; v3++) {
    function f4(a5, a6, a7) {
        Math.sin(a7);
        return --v2;
    }
    f4(f4, f0, f0);
    f4(f4, BigInt64Array, v2);
}
gc();

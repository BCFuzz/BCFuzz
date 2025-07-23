function f1() {
    function f3() {
        return f1;
    }
    const v6 = new Uint8ClampedArray(4294967296);
    v6.byteLength;
    const v8 = f3.apply(BigInt64Array, arguments);
    try { v8(v8); } catch (e) {}
}
f1();
for (let i13 = -3, i14 = 10; i14--, i13 < i14;) {
}
gc();

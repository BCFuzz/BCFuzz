function f1() {
    const v2 = [1886715396,-2147483647,-65536,-65536,6,6,-2147483647];
    function f3() {
        return f3;
    }
    Object.defineProperty(v2, "set", { configurable: true, enumerable: true, get: f3 });
    function f4(a5, a6) {
        Reflect.defineProperty(Uint8Array, a5, v2);
        return f4;
    }
    const t10 = f4.call(3500, 3500);
    t10(3500);
    return 3500;
}
f1();
f1();
for (let i16 = 0, i17 = 10; i16 < i17; i17--) {
}
gc();

function f0() {
    const v1 = [1886715396,-2147483647,-65536,-65536,6,6,-2147483647];
    function f2() {
        return f2;
    }
    Object.defineProperty(v1, "set", { configurable: true, enumerable: true, get: f2 });
    function f3(a4, a5) {
        Reflect.defineProperty(Uint8Array, a4, v1);
        return f3;
    }
    f3.call(v1, v1, f0, f0);
    return f0;
}
f0();
f0();
for (let i14 = 0, i15 = 10; i14 < i15; i15--) {
}
gc();

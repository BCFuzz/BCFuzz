function f0() {
    const v1 = [1886715396,-2147483647,-65536,-65536,6,6,-2147483647];
    v1.configurable = f0;
    function f2(a3, a4) {
        Reflect.defineProperty(Uint8Array, a3, v1);
        return f0;
    }
    f2.call();
    return v1;
}
f0();
for (let i12 = 0, i13 = 10; i12 < i13; i13--) {
}
gc();

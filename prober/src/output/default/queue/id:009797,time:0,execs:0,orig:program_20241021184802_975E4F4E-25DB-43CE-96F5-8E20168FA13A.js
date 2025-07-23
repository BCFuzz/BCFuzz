const v0 = [-4096,255,8,268435456,-9223372036854775807,4,1978198554];
for (let v1 = 0; v1 < 5; v1++) {
    const v3 = "p" + v1;
    const v5 = v3.codePointAt.call(v0);
    const v6 = v5 - v5;
    const v7 = [1886715396,-2147483647,-65536,-65536,6,6,-2147483647];
    v7.writable = v6;
    function f8(a9, a10) {
        return Reflect.defineProperty(Uint8Array, a9, v7);
    }
    f8.call(v0, v3, v0);
    for (let i17 = 0, i18 = 10; i17 < i18; i18--) {
    }
}
gc();

function F0(a2) {
    if (!new.target) { throw 'must be called with new'; }
    for (let v3 = 0; v3 < 25; v3++) {
        function F4(a6, a7, a8) {
            if (!new.target) { throw 'must be called with new'; }
            for (let v10 = 0; v10 < 5; v10++) {
                function f11() {
                    return v3;
                }
                Object.defineProperty(Array, "a", { configurable: true, enumerable: true, set: f11 });
            }
            ([1886715396,-2147483647,-65536,-65536,6,6,-2147483647]).slice();
            for (let i16 = 0, i17 = 10; i16 <= i17; i17--) {
            }
        }
        new F4();
    }
}
new F0();
gc();

for (let v0 = 0; v0 < 50; v0++) {
    function f1() {
        const o2 = {
        };
        return o2;
    }
    const v3 = f1();
    const v4 = f1();
    const v5 = f1();
    function f6(a7, a8) {
        function f9(a10) {
            return a10;
        }
        a8[Symbol.toPrimitive] = f9;
        const o17 = {
            [a8](a14, a15, a16) {
            },
        };
        return o17;
    }
    f6(v5, f6(v3, v4));
}
gc();

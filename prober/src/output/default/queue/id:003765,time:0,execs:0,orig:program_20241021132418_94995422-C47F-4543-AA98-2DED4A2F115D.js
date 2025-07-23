function f0() {
    const o1 = {
    };
    return o1;
}
const v2 = f0();
const v3 = f0();
const v4 = f0();
function f5(a6, a7) {
    function f8(a9) {
        class C11 {
            static 9 = 1000.0;
        }
        return 1000.0;
    }
    f8();
    a7[Symbol.toPrimitive] = f8;
    const o19 = {
        [v3]: v2,
        [a7](a16, a17, a18) {
        },
    };
    return o19;
}
f5(v4, f5(v2, v3));
f5(v3, v4);
gc();

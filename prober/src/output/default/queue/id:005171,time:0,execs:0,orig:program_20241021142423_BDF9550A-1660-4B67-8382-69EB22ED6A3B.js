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
        let v10 = 1000.0;
        v10++;
        class C12 {
            static 9 = v10;
        }
    }
    f8(v4);
    a7[Symbol.toPrimitive] = f8;
    const o20 = {
        [v3]: v2,
        [a7](a17, a18, a19) {
        },
    };
    return o20;
}
f5(v4, f5(v2, v3));
f5(v3, v4);
gc();

class C1 {
    toString(a3, a4) {
        gc();
    }
}
const v7 = new C1();
function f8(a9, a10) {
    const o21 = {
        [v7]: a10,
        "d": C1,
        set e(a12) {
        },
        "maxByteLength": -5,
        o(a14, a15, a16, a17) {
            return a10;
        },
        toString(a19, a20) {
            return this;
        },
    };
    return a9;
}
f8(f8, f8);
f8();
f8(f8, f8);
gc();

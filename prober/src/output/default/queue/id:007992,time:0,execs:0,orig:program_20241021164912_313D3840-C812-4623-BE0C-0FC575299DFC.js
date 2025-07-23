class C1 {
    #d;
}
const v2 = new C1();
const v3 = new C1();
function f5(a6, a7, a8, a9) {
    const o21 = {
        "d": -1000000000000.0,
        [a8](a11, a12, a13) {
        },
        10: a6,
        toString(a15, a16, a17) {
            JSON["stringify"](this);
            return a15;
        },
    };
    return o21;
}
const v22 = f5(v3);
f5(v2, 1000000.0, v22);
f5(v3, 1000000.0, v22);
gc();

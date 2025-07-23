class C0 {
}
const v1 = new C0();
const v2 = v1.constructor;
function f3(a4, a5) {
    const o29 = {
        ...a4,
        ...a4,
        get d() {
            for (let v7 = 0; v7 < 100; v7++) {
                function f8(a9, a10, a11) {
                    for (let i14 = 0, i15 = 10; i14 < i15; i15--) {
                    }
                    const v23 = new Int16Array();
                    ("c" + a9) + v23;
                    return v23;
                }
                f8(v2);
                f8();
            }
            return a4;
        },
    };
    return o29;
}
f3(f3(v2, C0));
gc();

for (let i2 = 0, i3 = 10; i2 !== i3; i3--) {
}
function f10(a11, a12) {
    for (let v13 = 0; v13 < 5; v13++) {
        function f14(a15) {
            class C16 {
                static set b(a18) {
                }
            }
            const o19 = {
                __proto__: C16,
            };
            o19.b = o19;
            return f14;
        }
        f14(a11);
        const t15 = f14();
        t15(a12);
    }
    return f10;
}
f10.apply(f10);
gc();

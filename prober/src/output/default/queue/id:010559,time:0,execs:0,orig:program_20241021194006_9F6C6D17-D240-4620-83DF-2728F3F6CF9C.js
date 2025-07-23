class C0 {
}
function f1(a2) {
    for (let [i17, i18] = (() => {
            for (let v5 = 0; v5 < 100; v5++) {
                function f7(a8, a9) {
                    const o10 = {
                        "f": a9,
                        __proto__: a8,
                    };
                    const v11 = o10.f;
                    try { v11(); } catch (e) {}
                    Float32Array.from(o10);
                    return f7;
                }
                f7(f7(Date), f7);
            }
            return [0, 10];
        })();
        i17 < i18;
        i18--) {
    }
}
const v25 = new C0();
const v26 = v25.constructor;
v26.toString = f1;
const t26 = v26.toString;
t26();
gc();

class C0 {
}
function f1(a2) {
    for (let [i18, i19] = (() => {
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
                const v15 = f7(Date);
                v15(10, 0);
                f7(v15, f7);
            }
            return [0, 10];
        })();
        i18 < i19;
        i19--) {
    }
    return C0;
}
const v26 = new C0();
const v27 = v26.constructor;
v27.toString = f1;
const t29 = v27.toString;
t29();
gc();

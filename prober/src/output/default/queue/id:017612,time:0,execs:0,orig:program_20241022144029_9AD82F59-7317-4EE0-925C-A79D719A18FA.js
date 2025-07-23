const v0 = [];
function f1(a2, a3, a4, a5) {
    const o11 = {
        toString(a7, a8) {
            for (let v9 = 0; v9 < 5; v9++) {
                v0[v9 + v9] = v9;
            }
            return a2;
        },
    };
    for (const v12 in v0) {
        const t11 = v12.constructor;
        t11(a2);
        for (let v15 = 0; v15 < 100; v15++) {
        }
    }
    return o11.toString(f1, o11, a3, f1);
}
for (let i = 0; i < 5; i++) {
    f1();
}
gc();

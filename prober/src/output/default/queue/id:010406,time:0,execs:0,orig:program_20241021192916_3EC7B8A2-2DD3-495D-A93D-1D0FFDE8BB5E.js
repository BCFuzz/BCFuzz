const v0 = [];
function f1(a2, a3, a4, a5) {
    const o12 = {
        toString(a7, a8) {
            for (let v9 = 0; v9 < 5; v9++) {
                v0["p" + v9] = v9;
            }
            return a4;
        },
    };
    for (const v13 in v0) {
        for (let v14 = 0; v14 < 100; v14++) {
        }
    }
    o12.toString(v0, f1);
    return a3;
}
for (let i = 0; i < 5; i++) {
    f1();
}
gc();

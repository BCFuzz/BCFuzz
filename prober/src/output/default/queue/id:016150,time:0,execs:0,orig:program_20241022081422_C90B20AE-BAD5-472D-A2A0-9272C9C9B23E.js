function f1(a2, a3) {
    const o4 = {
        "a": -1000000.0,
    };
    return o4;
}
const v5 = f1(-1000000.0, f1);
for (let v6 = 0; v6 < 50; v6++) {
    for (let i = 0; i < 5; i++) {
        const v7 = v5.a;
        try { v7.toString(v6); } catch (e) {}
    }
    for (let v9 = 0; v9 < 50; v9++) {
    }
}
gc();

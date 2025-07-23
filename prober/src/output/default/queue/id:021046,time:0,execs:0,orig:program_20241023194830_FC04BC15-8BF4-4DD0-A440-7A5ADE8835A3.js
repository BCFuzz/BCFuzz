function f1(a2, a3) {
    const o4 = {
        "a": -1000000.0,
    };
    return o4;
}
const v5 = f1(-1000000.0, f1);
for (let v6 = 0; v6 < 50; v6++) {
    const v7 = v5.a;
    v6 === v7;
    try { v7.toString(v6); } catch (e) {}
    for (let v10 = 0; v10 < 5; v10++) {
    }
}
gc();

function f1(a2, a3, a4) {
    const o5 = {
        ["toStringTag"]: a2,
    };
    o5.constructor = f1;
    const v6 = o5.constructor;
    try { v6(a4, a3, v6, a2); } catch (e) {}
    o5.callee;
    return a2;
}
for (let v9 = 0; v9 < 5; v9++) {
    f1(v9, f1, f1);
}
gc();

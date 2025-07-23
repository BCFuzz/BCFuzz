function f1(a2, a3, a4) {
    const o5 = {
        ["toStringTag"]: a2,
    };
    o5.constructor = f1;
    const v6 = o5.constructor;
    try { v6(v6); } catch (e) {}
    o5.toStringTag;
    return o5;
}
for (let v9 = 0; v9 < 5; v9++) {
    f1(f1, f1, "toStringTag");
}
gc();

function f2(a3, a4, a5) {
    const o6 = {
        ["toStringTag"]: a3,
    };
    const v7 = o6.constructor;
    try { new v7(-1000000000000.0); } catch (e) {}
    o6.toStringTag;
    return a3;
}
for (let v10 = 0; v10 < 10; v10++) {
    f2(v10, -1000000000000.0, f2);
}
gc();

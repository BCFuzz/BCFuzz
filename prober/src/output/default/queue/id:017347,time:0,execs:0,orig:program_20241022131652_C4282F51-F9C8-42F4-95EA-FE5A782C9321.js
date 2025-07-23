function f0(a1, a2, a3) {
    const o4 = {
    };
    const v5 = o4.constructor;
    try { v5.getPrototypeOf(a3); } catch (e) {}
    return f0;
}
for (let v7 = 0; v7 < 10; v7++) {
    f0();
}
gc();

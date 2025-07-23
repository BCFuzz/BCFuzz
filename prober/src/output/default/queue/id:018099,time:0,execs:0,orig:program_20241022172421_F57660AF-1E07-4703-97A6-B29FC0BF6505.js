function f1(a2, a3, a4, a5) {
    const v6 = a5.prototype;
    try { v6.constructor(a3, 9.81268004286298); } catch (e) {}
    Object.getPrototypeOf(a3);
    return v6;
}
for (let v10 = 0; v10 < 5; v10++) {
    f1(f1, v10, v10, f1);
}
gc();

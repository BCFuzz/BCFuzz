const o1 = {
    "a": -2.220446049250313e-16,
};
for (let v2 = 0; v2 < 25; v2++) {
    const v3 = o1.a;
    try { v3.toString(v2); } catch (e) {}
}
gc();

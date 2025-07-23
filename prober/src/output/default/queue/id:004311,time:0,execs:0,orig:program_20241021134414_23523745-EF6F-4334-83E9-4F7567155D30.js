function f0(a1, a2, a3, a4) {
    const v5 = a2 + a2;
    v5 === v5;
    a2 + a2;
    try { a3(); } catch (e) {}
    return f0;
}
for (let v9 = 0; v9 < 5; v9++) {
    f0(v9, v9, f0);
}
gc();

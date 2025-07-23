function f0(a1, a2, a3, a4) {
    try { a1(a2); } catch (e) {}
    const v9 = new Uint32Array(64);
    v9[0] %= 3;
    return a3;
}
for (let v10 = 0; v10 < 50; v10++) {
    f0(f0, f0);
}
gc();

function f0(a1, a2, a3, a4) {
    try { a1(a2, a3); } catch (e) {}
    try { a2(); } catch (e) {}
    const v10 = new Uint32Array(64);
    v10[2] ^= 7;
    return a2;
}
for (let v11 = 0; v11 < 50; v11++) {
    f0(f0, f0);
}
gc();

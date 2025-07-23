function f12(a13, a14) {
    try { a13(3, a13); } catch (e) {}
    const v17 = Math.ceil;
    let v18;
    try { v18 = a14(v17); } catch (e) {}
    return v18;
}
for (let i = 0; i < 100; i++) {
    f12(f12, f12);
}
gc();

function f0(a1, a2, a3, a4) {
    const v5 = a1.toString;
    try { v5.call(); } catch (e) {}
    return a4;
}
f0(f0);
gc();

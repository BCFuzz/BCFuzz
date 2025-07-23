function f0(a1, a2) {
    const v3 = a1.arguments;
    try { v3.callee(); } catch (e) {}
    return f0;
}
f0(f0);
gc();

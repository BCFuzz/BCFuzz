function f0(a1, a2) {
    const v3 = a1.bind();
    try { v3(v3); } catch (e) {}
    return a1;
}
f0(f0);
gc();

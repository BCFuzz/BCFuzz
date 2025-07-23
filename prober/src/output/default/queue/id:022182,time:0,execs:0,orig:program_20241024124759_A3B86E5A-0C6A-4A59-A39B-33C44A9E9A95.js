function f0(a1, a2) {
    const v3 = a1.bind(a1, f0, a1);
    const v4 = v3 instanceof v3;
    try { v3(v3); } catch (e) {}
    return v4;
}
f0(f0);
gc();

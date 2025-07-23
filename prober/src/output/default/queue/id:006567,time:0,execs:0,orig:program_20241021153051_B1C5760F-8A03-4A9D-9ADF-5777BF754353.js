function f0(a1, a2) {
    const v3 = a2.constructor;
    try { v3(a1); } catch (e) {}
    return a2;
}
new Promise(f0);
gc();

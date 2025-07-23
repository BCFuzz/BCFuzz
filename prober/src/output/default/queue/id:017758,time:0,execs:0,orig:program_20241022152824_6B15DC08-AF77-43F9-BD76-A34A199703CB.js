function f0(a1, a2) {
    try { a1(a2, a2); } catch (e) {}
    for (let i = 0; i < 10; i++) {
    }
    return a2;
}
f0(f0, f0);
gc();

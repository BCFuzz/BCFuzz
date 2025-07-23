function f1(a2, a3) {
    try { Math.exp(-14n); } catch (e) {}
    return -14n;
}
for (let i = 0; i < 10; i++) {
    f1(f1, -14n);
}
gc();

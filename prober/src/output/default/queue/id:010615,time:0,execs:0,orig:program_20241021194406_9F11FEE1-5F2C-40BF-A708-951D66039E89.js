function f0(a1, a2) {
    return Number.isNaN();
}
for (let i = 0; i < 10; i++) {
    f0(f0, f0);
}
gc();

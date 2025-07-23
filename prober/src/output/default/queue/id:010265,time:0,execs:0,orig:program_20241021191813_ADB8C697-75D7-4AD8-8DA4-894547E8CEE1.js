function f0(a1, a2) {
    const t1 = Math.ceil;
    t1(a2);
    return a2;
}
for (let i = 0; i < 100; i++) {
    f0(f0, f0);
}
gc();

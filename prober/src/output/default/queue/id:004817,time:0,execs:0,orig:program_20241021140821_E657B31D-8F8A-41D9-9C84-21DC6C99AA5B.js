function f0() {
    const v2 = new Set();
    v2.values();
    return Set;
}
for (let i = 0; i < 10; i++) {
    f0();
}
gc();

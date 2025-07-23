function f0() {
    const o2 = {
        8: 1e-15,
    };
    o2[8];
    return f0;
}
for (let v4 = 0; v4 < 100; v4++) {
    f0();
}
gc();

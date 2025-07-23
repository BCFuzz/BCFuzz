function f0(a1, a2) {
    const o3 = {
    };
    const v4 = o3[4];
    const v5 = v4 >>> v4;
    v5 * v5;
    return a2;
}
for (let i = 0; i < 10; i++) {
    f0(f0, f0);
}
gc();

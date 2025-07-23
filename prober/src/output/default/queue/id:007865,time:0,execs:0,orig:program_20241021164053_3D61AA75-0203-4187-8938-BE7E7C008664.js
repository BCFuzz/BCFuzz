function f0(a1, a2) {
    const o3 = {
    };
    for (let v4 = 0; v4 < 10; v4++) {
        o3["p" + v4] = v4;
    }
    return o3;
}
for (let i = 0; i < 10; i++) {
    f0();
}
gc();

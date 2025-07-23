function f2(a3, a4) {
    const v5 = a3.constructor;
    const v6 = new v5();
    v6[15] = v6;
    for (let v7 = 0; v7 < 100; v7++) {
    }
    const o8 = {
        [a3]: "getFloat32",
    };
    return v5;
}
for (let i = 0; i < 25; i++) {
    f2("m");
}
gc();

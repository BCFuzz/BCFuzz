function f0() {
    const v4 = Math.random();
    const v5 = ~-4294967295;
    v5 && -4294967295;
    const o8 = {
        ..."2147483649",
        [-5.0]: -5.0,
    };
    (2720).toString();
    async function* f11(a12, a13, a14) {
        return a13;
    }
    for (let v15 = 0; v15 < 100; v15++) {
        f11(v15, v4, v15);
    }
    return v5;
}
for (let v17 = 0; v17 < 10; v17++) {
    f0();
}
gc();

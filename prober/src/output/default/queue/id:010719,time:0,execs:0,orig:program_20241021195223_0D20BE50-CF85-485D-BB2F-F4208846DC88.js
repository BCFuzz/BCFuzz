function f0() {
    async function* f1(a2, a3, a4) {
        return f1;
    }
    const v6 = eval();
    for (let v7 = 0; v7 < 5; v7++) {
        f1(v7);
    }
    return v6;
}
for (let v9 = 0; v9 < 10; v9++) {
    f0();
}
gc();

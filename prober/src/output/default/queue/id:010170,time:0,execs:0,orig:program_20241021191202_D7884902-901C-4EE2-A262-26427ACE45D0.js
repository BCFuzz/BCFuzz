function f0() {
    for (let v1 = 0; v1 < 10; v1++) {
        for (let v3 = 0; v3 < 100; v3++) {
        }
        const v4 = 5n * 5n;
        const v5 = v4 | v4;
        v5 + v5;
    }
}
f0();
f0();
gc();

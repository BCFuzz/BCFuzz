function f1() {
    const o3 = {
        8: 1e-15,
    };
    o3[8] = o3;
    o3[8];
}
for (let v5 = 0; v5 < 100; v5++) {
    f1();
}
gc();

function f1(a2) {
    const o8 = {
        [a2](a4, a5, a6, a7) {
        },
    };
    return o8;
}
const v9 = f1(127);
for (let v10 = 0; v10 < 500; v10++) {
    for (let v11 = 0; v11 < 5; v11++) {
        v9[14] = v10;
    }
}
gc();

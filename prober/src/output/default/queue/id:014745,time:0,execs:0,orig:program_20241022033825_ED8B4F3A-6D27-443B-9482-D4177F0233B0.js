function f0(a1, a2, a3) {
    eval.length;
    for (let v7 = 0; v7 < 5; v7++) {
        v7 in arguments;
    }
    return f0;
}
const v9 = f0(f0, f0, f0);
for (let i12 = 0, i13 = 10; i12 < i13; i13--) {
}
for (let i22 = 0, i23 = 10;
    (() => {
        const v24 = i22 < i23;
        v9(f0, v24, i23);
        return v24;
    })();
    i23--) {
}
gc();

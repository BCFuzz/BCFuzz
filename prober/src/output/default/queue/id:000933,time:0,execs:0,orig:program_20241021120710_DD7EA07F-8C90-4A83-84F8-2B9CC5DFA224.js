function f0(a1, a2, a3, a4) {
    const o9 = {
        p(a6, a7, a8) {
            super.d = a1;
            return a8;
        },
    };
    return a2;
}
for (let v10 = 0; v10 < 10; v10++) {
    f0(v10, v10, f0, f0);
}
gc();

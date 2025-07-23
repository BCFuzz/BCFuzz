const v4 = new Int8Array(255);
for (const v5 in v4) {
    class C6 {
        constructor(a8, a9) {
            const v10 = [a9,a9];
            v10[3] = 99;
            v10[2] = v4;
            v10[1] = -6.375293669665365e+307;
        }
    }
    new C6(C6, -6.375293669665365e+307);
}
gc();

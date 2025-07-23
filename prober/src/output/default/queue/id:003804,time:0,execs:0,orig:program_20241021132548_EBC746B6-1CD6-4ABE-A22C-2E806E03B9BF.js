function f1(a2, a3) {
    const o8 = {
        n(a5, a6, a7) {
            this[10] /= a6;
            return a3;
        },
    };
    return o8;
}
const v9 = f1(f1, 776922402n);
const v10 = f1();
try { v10.n(v9, 776922402n); } catch (e) {}
gc();

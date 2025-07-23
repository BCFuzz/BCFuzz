const o6 = {
    n(a1, a2, a3) {
        class C4 {
        }
        const v5 = this;
        super[v5] = C4;
        return a2;
    },
};
const t9 = o6.n;
t9(o6);
gc();

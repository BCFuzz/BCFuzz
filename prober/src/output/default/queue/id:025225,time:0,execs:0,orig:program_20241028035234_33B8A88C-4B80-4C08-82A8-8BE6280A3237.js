function F0() {
    if (!new.target) { throw 'must be called with new'; }
}
const o8 = {
    n(a3, a4, a5) {
        const v6 = this;
        for (const v7 in v6) {
            super[v7] = a4;
        }
        return a3;
    },
};
const t12 = o8.n;
t12();
gc();

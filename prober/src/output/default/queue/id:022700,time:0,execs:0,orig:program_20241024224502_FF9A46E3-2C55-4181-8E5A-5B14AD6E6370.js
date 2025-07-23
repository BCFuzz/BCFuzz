const o7 = {
    n(a1, a2, a3) {
        const v4 = this;
        return v4.Intl.Collator();
    },
};
const t6 = o7.n;
const t7 = t6().compare.bind();
t7();
gc();

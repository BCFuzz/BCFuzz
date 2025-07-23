const o7 = {
    n(a1, a2, a3) {
        this.Intl.Collator().compare(a1, a1);
        return this;
    },
};
const v8 = o7.n;
v8(v8);
gc();

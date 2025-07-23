const o9 = {
    n(a1, a2, a3) {
        const v4 = this;
        const t3 = v4.Intl.Segmenter;
        const v7 = new t3();
        return v7.segment(this);
    },
};
const t8 = o9.n;
const v11 = t8();
const o12 = {
    "a": v11,
};
gc();

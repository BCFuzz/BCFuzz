const o10 = {
    n(a1, a2, a3) {
        const v4 = this;
        const v5 = v4.Intl;
        const v6 = v5.Segmenter;
        const v7 = new v6(a1, v5, v6, a1);
        v7.segment(a2, v7, v6, a2).containing();
        return a2;
    },
};
const t10 = o10.n;
t10();
gc();

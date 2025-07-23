const o8 = {
    n(a1, a2, a3) {
        const v4 = this;
        const t3 = v4.Intl.Segmenter;
        const v7 = new t3(a2, this, a2, a2);
        return v7;
    },
};
const t8 = o8.n;
const v11 = t8().segment();
try { v11.containing(); } catch (e) {}
gc();

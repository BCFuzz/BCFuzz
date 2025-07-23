const o11 = {
    n(a1, a2, a3) {
        const v4 = this;
        const t3 = v4.Intl.Segmenter;
        const v7 = new t3(this, a2);
        const v9 = v7.segment().containing;
        return v9.call(v9);
    },
};
const v12 = o11.n;
try { v12(); } catch (e) {}
gc();

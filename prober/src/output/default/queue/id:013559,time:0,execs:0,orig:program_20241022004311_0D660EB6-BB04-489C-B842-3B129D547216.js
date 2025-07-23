const o11 = {
    n(a1, a2, a3) {
        const v4 = this;
        const t3 = v4.Intl.Segmenter;
        const v7 = new t3();
        const v8 = v7.constructor;
        const v9 = v8.prototype;
        try { v9.segment(v7, a2, v9, v8, this); } catch (e) {}
        return a2;
    },
};
const t11 = o11.n;
t11();
gc();

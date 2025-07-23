const o10 = {
    n(a1, a2, a3) {
        const v4 = this;
        const v6 = v4.Intl.Segmenter;
        let v7;
        try { v7 = v6(); } catch (e) {}
        const v8 = new v6();
        v8.segment(v7);
        return v7;
    },
};
const v11 = o10.n;
v11(v11, o10);
gc();

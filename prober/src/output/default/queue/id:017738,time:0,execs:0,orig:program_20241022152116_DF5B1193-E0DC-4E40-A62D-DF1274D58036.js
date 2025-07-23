const o10 = {
    n(a1, a2, a3) {
        const v4 = this;
        const v6 = v4.Intl.Segmenter;
        const v7 = new v6(v6, a1);
        const v8 = v7.segment;
        let v9;
        try { v9 = v8(); } catch (e) {}
        return v9;
    },
};
const v11 = o10.n;
v11(o10, o10, o10, v11, o10);
gc();

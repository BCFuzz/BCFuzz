const o11 = {
    n(a1, a2, a3) {
        const v4 = this;
        const v5 = v4.Intl;
        const t4 = v5.Segmenter;
        const v7 = new t4();
        const v8 = v7.constructor;
        const v9 = v8.prototype;
        let v10;
        try { v10 = v9.resolvedOptions(v5, v8, a1, a3); } catch (e) {}
        return v10;
    },
};
const t13 = o11.n;
t13();
gc();

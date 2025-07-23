const o27 = {
    n(a1, a2, a3) {
        for (let i6 = 0, i7 = 10; i6 < i7; i7--) {
        }
        const o22 = {
            n(a15, a16, a17) {
                const v18 = this;
                const v19 = v18.Intl;
                const v20 = v19.RelativeTimeFormat;
                const v21 = new v20(v20, a15, v19);
                return v21;
            },
        };
        const t13 = o22.n;
        const v25 = t13().format;
        let v26;
        try { v26 = v25(); } catch (e) {}
        return v26;
    },
};
const t20 = o27.n;
t20();
gc();

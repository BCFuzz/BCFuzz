const o8 = {
    n(a1, a2, a3) {
        const v4 = this;
        const t3 = v4.Intl.RelativeTimeFormat;
        const v7 = new t3(this, this);
        return v7;
    },
};
const v9 = o8.n;
const v11 = v9().format;
try { v11(o8, v9); } catch (e) {}
gc();

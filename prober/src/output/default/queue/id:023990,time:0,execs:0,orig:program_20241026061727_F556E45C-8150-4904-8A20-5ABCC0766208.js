const o10 = {
    n(a1, a2, a3) {
        const v4 = this;
        const v8 = v4.Intl.DisplayNames.prototype.of;
        let v9;
        try { v9 = v8.call(); } catch (e) {}
        return v9;
    },
};
const t9 = o10.n;
t9();
gc();

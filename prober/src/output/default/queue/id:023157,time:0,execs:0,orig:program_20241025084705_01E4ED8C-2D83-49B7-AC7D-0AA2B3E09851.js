const o9 = {
    n(a2, a3, a4) {
        const v5 = this;
        const t3 = v5.Intl.RelativeTimeFormat;
        const v8 = new t3();
        return v8;
    },
};
const v10 = o9.n;
const v11 = v10(o9, v10, o9);
const v12 = v11.toString();
try { v11.format(133101.47695346922, v12); } catch (e) {}
gc();

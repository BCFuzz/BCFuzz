const v1 = new Int32Array();
const o10 = {
    n(a3, a4, a5) {
        const v6 = this;
        const v7 = v6.Intl;
        v7.NumberFormat.supportedLocalesOf(v7, v1);
        return v6;
    },
};
const v11 = o10.n;
v11(v11, v1, v1);
gc();

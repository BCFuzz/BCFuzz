let v1 = "6";
v1 &&= 128;
const o10 = {
    n(a3, a4, a5) {
        const v6 = this;
        const v7 = v6.Intl;
        v7.style = a3;
        const v8 = v7.RelativeTimeFormat;
        const v9 = new v8(v8, v7);
        return v9;
    },
};
const v11 = o10.n;
try { v11(v1); } catch (e) {}
gc();

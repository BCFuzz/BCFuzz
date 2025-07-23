class C1 {
}
let v2 = C1.__defineSetter__;
v2 &&= 128;
const o13 = {
    n(a4, a5, a6) {
        const v7 = this;
        const v8 = v7.parseFloat(v7, v7, a6, this, a6);
        const v10 = v7.Intl.RelativeTimeFormat;
        const v11 = new v10(v10, v10);
        try { v11.format(v2, v8); } catch (e) {}
        return a5;
    },
};
const v14 = o13.n;
v14(v14, 128, v14, v2);
gc();

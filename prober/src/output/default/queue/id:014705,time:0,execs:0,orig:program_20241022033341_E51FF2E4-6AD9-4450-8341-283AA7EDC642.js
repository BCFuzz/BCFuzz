class C0 {
}
const v1 = new C0();
function f2() {
    const o3 = {
    };
    return o3;
}
v1[Symbol.toPrimitive] = f2;
const o14 = {
    n(a7, a8, a9) {
        const v10 = this;
        const t12 = v10.Intl.RelativeTimeFormat;
        const v13 = new t12();
        return v13;
    },
};
const v15 = o14.n;
const v16 = v15(v15, o14);
try { v16.formatToParts(v15, v1); } catch (e) {}
gc();

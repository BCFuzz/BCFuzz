for (let i3 = 0, i4 = 10; i3 < i4; i4--) {
}
const o21 = {
    n(a13, a14, a15) {
        const v16 = this;
        const v18 = v16.Intl.Locale;
        Object.defineProperty(v18, "region", { configurable: true, enumerable: true, value: 129 });
        const v19 = new v18("split", v18);
        v19.getTimeZones();
        return a15;
    },
};
const t12 = o21.n;
t12();
gc();

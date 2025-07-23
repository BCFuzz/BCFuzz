const v1 = false && false;
const o2 = {
};
const o12 = {
    n(a5, a6, a7) {
        Object.defineProperty(a5, "caseFirst", { writable: true, configurable: true, value: v1 });
        const v8 = this;
        const t7 = v8.Intl.Locale;
        new t7("aWqBm", o2);
        return a6;
    },
};
const t12 = o12.n;
t12(o2);
gc();

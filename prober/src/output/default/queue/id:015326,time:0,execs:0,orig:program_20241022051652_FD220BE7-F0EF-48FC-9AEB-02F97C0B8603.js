function f0() {
    const o1 = {
    };
    return o1;
}
class C2 {
}
Object.defineProperty(C2, "toString", { writable: true, configurable: true, value: f0 });
const o12 = {
    n(a4, a5, a6) {
        const v7 = this;
        const t11 = v7.Intl.NumberFormat;
        const v10 = t11(v7, a4);
        try { v10.formatToParts(C2); } catch (e) {}
        return a5;
    },
};
const v13 = o12.n;
v13(v13, C2, f0, o12, f0);
gc();

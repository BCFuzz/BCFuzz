const o17 = {
    n(a1, a2, a3) {
        const v4 = this;
        const v6 = v4.Intl.NumberFormat;
        for (let i9 = 0, i10 = 10; i9 < i10; i10--) {
        }
        return v6;
    },
};
const v18 = o17.n;
const v19 = v18(v18, o17);
class C20 extends v19 {
}
const v21 = C20.prototype;
try { v21.resolvedOptions(o17, v18, v19); } catch (e) {}
gc();

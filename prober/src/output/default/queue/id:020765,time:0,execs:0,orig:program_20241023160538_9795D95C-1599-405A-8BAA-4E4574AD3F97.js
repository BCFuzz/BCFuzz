function f1() {
    return f1;
}
const o12 = {
    n(a3, a4, a5) {
        const v6 = this;
        Reflect.construct(WeakMap, [v6.Intl.DateTimeFormat], a3);
        return f1;
    },
};
const v13 = o12.n;
try { v13(f1); } catch (e) {}
gc();

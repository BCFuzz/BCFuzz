function f0() {
    return f0;
}
const o12 = {
    n(a2, a3, a4) {
        function f5(a6) {
            return Map;
        }
        a3.toString = f5;
        const v8 = this;
        const v9 = v8.Intl;
        const v10 = v9.DateTimeFormat;
        Object.defineProperty(v10, "year", { writable: true, configurable: true, value: a2 });
        v10(a3, v10);
        return v9;
    },
};
const v13 = o12.n;
try { v13(f0, f0); } catch (e) {}
gc();

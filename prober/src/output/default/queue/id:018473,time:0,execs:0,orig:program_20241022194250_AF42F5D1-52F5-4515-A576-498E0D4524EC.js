const o11 = {
    n(a2, a3, a4) {
        const v5 = this;
        const t3 = v5.Intl.DateTimeFormat;
        const v8 = t3();
        function f9() {
            return -1642883994n;
        }
        v8.toString = f9;
        v8.formatRangeToParts(v8, a2);
        return a3;
    },
};
const v12 = o11.n;
try { v12(o11); } catch (e) {}
gc();

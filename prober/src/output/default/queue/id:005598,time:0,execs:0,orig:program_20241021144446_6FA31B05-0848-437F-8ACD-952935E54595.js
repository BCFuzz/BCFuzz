const o9 = {
    toString(a6, a7) {
        return this.toString();
    },
};
try { o9.toString("", o9, -2.2250738585072014e-308); } catch (e) {}
gc();

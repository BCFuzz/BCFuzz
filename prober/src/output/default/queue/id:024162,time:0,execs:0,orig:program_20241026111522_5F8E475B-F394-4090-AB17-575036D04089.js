const o7 = {
    n(a2, a3, a4) {
        const v5 = this;
        try { v5.eval("with"); } catch (e) {}
        return a3;
    },
};
const v8 = o7.n;
v8("with", o7, "with", v8);
gc();

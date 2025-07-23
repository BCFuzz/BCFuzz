const o10 = {
    n(a2, a3, a4) {
        const v5 = this.SharedArrayBuffer;
        Object.defineProperty(v5, "collation", { configurable: true, enumerable: true, value: a4 });
        v5.caseFirst = 10729;
        const v6 = this;
        const v8 = v6.Intl.Collator;
        return v8(v8, v5);
    },
};
const v11 = o10.n;
try { v11(v11, o10, 10729); } catch (e) {}
gc();

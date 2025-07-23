const v1 = Float64Array.length;
const o10 = {
    n(a3, a4, a5) {
        const v6 = this;
        const v7 = v6.Intl;
        v7.type = v1;
        const v8 = v7.DisplayNames;
        let v9;
        try { v9 = new v8(a3, v7); } catch (e) {}
        return v9;
    },
};
const t12 = o10.n;
t12(v1);
gc();

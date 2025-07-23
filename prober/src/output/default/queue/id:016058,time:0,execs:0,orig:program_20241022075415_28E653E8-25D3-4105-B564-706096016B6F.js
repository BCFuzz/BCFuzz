const v1 = ("Fgry").trim();
const o12 = {
    n(a3, a4, a5) {
        const v6 = this;
        const v7 = v6.Intl;
        const v8 = v7.NumberFormat;
        const v10 = v8(v8, a4, a3).hasOwnProperty(v7, v1, a4);
        let v11;
        try { v11 = new v8(v1, v10); } catch (e) {}
        return v11;
    },
};
const v13 = o12.n;
v13("Fgry", v13, o12, o12);
gc();

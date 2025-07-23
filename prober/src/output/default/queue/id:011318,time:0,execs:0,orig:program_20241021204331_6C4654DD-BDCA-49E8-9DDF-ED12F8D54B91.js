const o10 = {
    n(a1, a2, a3) {
        for (let v4 = 0; v4 < 10; v4++) {
            const v5 = this;
            const v6 = v5.Set;
            const v8 = v5.Intl.DisplayNames;
            try { new v8(a1, v6); } catch (e) {}
        }
        return a1;
    },
};
const v11 = o10.n;
v11(v11, v11, v11, v11, o10);
gc();

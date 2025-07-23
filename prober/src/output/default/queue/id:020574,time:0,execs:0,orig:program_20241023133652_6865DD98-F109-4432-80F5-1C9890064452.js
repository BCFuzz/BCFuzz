const o26 = {
    get d() {
        for (let i3 = 0, i4 = 10; i3 < i4; i4--) {
        }
        const o23 = {
            n(a13, a14, a15) {
                const v16 = this;
                const v18 = v16.Intl.Locale;
                function f19() {
                    return v18;
                }
                function f20(a21) {
                    return f20;
                }
                Object.defineProperty(v18, "script", { configurable: true, enumerable: true, get: f19, set: f20 });
                const v22 = new v18("aWqBm", v18);
                return v22;
            },
        };
        const v24 = o23.n;
        let v25;
        try { v25 = v24(); } catch (e) {}
        return v25;
    },
};
const o27 = {
    ...o26,
};
gc();

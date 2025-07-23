for (let v0 = 0; v0 < 5; v0++) {
    const v1 = `
        function f2(a3, a4) {
            return a4;
        }
    `;
    const o14 = {
        n(a6, a7, a8) {
            const v9 = this;
            const v11 = v9.Intl.NumberFormat;
            v11(a7, v1, v11).formatToParts(v1);
            return v9;
        },
    };
    const t14 = o14.n;
    t14();
}
gc();

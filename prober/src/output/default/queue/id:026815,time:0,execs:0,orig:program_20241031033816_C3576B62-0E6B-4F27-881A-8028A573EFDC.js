const o7 = {
    n(a1) {
        const v2 = `
            for (const v4 in /\P{gc=Decimal_Number}/mvgi) {
            }
        `;
        eval(v2);
        return v2;
    },
};
try { o7.n(o7, o7, o7, o7); } catch (e) {}
gc();

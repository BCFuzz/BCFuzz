const o8 = {
    n(a1) {
        const v2 = `
            /\u{12345}/myvis;
            for (const v5 in /\P{gc=Decimal_Number}/mvgi) {
            }
        `;
        eval(v2);
        return eval;
    },
};
try { o8.n(o8); } catch (e) {}
gc();

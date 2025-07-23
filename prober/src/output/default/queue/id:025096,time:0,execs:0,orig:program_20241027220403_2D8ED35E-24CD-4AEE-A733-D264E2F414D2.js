const o7 = {
    n(a1) {
        const v2 = `
            for (const v4 in /a\nb\bc/mvgi) {
            }
        `;
        return eval(v2);
    },
};
try { o7.n(o7, o7, o7, o7); } catch (e) {}
gc();

const o6 = {
    n(a1) {
        const v2 = `
            /a\nb\bc/mvgi;
        `;
        eval(v2);
        return a1;
    },
};
try { o6.n(); } catch (e) {}
gc();

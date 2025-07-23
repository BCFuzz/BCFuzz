const o6 = {
    n(a1) {
        const v2 = `
            /[\cA]a{0}+/mvgi;
        `;
        return eval(v2);
    },
};
try { o6.n(); } catch (e) {}
gc();

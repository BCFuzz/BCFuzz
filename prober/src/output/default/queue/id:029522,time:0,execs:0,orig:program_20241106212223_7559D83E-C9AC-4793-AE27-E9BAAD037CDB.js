const o6 = {
    n(a1) {
        const v2 = `
            /\u{12345}3ya(?!b)*/myvis;
        `;
        eval(v2);
        return eval;
    },
};
try { o6.n(o6); } catch (e) {}
gc();

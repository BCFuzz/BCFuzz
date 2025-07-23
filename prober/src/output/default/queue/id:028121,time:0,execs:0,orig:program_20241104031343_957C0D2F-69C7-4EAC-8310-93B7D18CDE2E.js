const o6 = {
    n(a1) {
        const v2 = `
            /[^\u{12345}\u{23456}]/mvgi;
        `;
        eval(v2);
        return eval;
    },
};
o6.n(o6, o6, o6);
gc();

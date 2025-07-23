const o9 = {
    valueOf(a1) {
        const v3 = `
            switch ("n") {
                default:
                    let v4 = 0.08677347165770777;
                    let v5 = --v4;
                    v5--;
                    break;
            }
        `;
        eval(v3);
        return eval;
    },
};
o9.valueOf(o9, o9, o9, o9, o9);
gc();

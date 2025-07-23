const o12 = {
    ["function"](a2, a3, a4, a5) {
        const v6 = `
            -257;
            /\u{12345}/myvis;
        `;
        eval(v6);
    },
};
o12.function();
gc();

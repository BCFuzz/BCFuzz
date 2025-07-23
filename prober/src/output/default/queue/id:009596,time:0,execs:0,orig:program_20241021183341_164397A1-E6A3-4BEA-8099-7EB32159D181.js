const v0 = `
    const o10 = {
        valueOf(a2) {
            const o9 = {
                ["__proto__"](a5, a6, a7, a8) {
                },
            };
            return o9;
        },
    };
    const v12 = new Float32Array();
    const o13 = {
        __proto__: v12,
    };
    /\u{12345}/myvis;
`;
eval(v0);
gc();

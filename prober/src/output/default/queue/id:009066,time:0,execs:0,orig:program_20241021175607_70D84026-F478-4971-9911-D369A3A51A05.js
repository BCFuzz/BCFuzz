const v0 = `
    function f1(a2, a3) {
        const o4 = {
        };
        o4[2] = o4;
        return v0;
    }
    /\u{12345}/myvis;
`;
eval(v0);
gc();

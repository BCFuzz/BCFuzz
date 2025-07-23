const v0 = `
    function f1(a2, a3) {
        let v4 = 44485;
        for (; v4--;) {
        }
        return f1;
    }
    /\u{12345}/myvis;
`;
eval(v0);
gc();

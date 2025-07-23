const v0 = `
    function F1(a3, a4, a5, a6) {
        if (!new.target) { throw 'must be called with new'; }
        a6?.call;
    }
    /\u{12345}/myvis;
`;
eval(v0);
gc();

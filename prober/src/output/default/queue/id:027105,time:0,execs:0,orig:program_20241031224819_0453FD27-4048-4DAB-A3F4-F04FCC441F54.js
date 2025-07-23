const v0 = `
    function F1(a3, a4) {
        if (!new.target) { throw 'must be called with new'; }
        class C5 {
            static n(a7, a8) {
                const v10 = URIError(a8);
                eval(v10 + v10);
            }
        }
        try { C5.n(v0, v0); } catch (e) {}
    }
    new F1(F1, v0);
    /\u{12345}/myvis;
`;
eval(v0);
gc();

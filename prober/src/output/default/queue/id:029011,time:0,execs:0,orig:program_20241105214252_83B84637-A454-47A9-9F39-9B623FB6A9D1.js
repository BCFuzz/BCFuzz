const v0 = `
    function F1(a3, a4) {
        if (!new.target) { throw 'must be called with new'; }
        class C5 {
            static n(a7, a8) {
                eval(a4 + URIError(URIError(C5)));
            }
        }
        try { C5.n(C5); } catch (e) {}
    }
    new F1();
    /\u{12345}/myvis;
`;
eval(v0);
gc();

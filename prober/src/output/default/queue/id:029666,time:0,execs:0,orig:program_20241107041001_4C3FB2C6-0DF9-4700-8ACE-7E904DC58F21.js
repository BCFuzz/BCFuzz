const v0 = `
    function F1(a3, a4) {
        if (!new.target) { throw 'must be called with new'; }
        class C5 {
            static n(a7, a8) {
                const v10 = RegExp(a8);
                /\u{12345}/myvis;
                eval(v10 + v10);
            }
        }
        try { C5.n(v0, v0); } catch (e) {}
    }
    new F1(F1, F1);
`;
eval(v0);
gc();

const v0 = `
    function F1(a3, a4) {
        if (!new.target) { throw 'must be called with new'; }
        class C5 {
            static finally(a7, a8) {
            }
        }
    }
    /\u{12345}/myvis;
`;
eval(v0);
gc();

const v0 = `
    function f1(a2, a3, a4) {
        class C5 {
        }
        var arguments = C5();
        /\u{12345}/myvis;
        return a2;
    }
`;
eval(v0);
gc();

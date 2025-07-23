const v0 = `
    function F1(a3, a4, a5, a6) {
        if (!new.target) { throw 'must be called with new'; }
        function f7() {
            function F9(a11, a12, a13, a14) {
                if (!new.target) { throw 'must be called with new'; }
                a14 &= a13;
                F1 * arguments;
            }
            new F9(a6, this, this, F1);
            return v0;
        }
        f7();
    }
    new F1(v0, v0, F1, F1);
    /\u{12345}/myvis;
`;
eval(v0);
gc();

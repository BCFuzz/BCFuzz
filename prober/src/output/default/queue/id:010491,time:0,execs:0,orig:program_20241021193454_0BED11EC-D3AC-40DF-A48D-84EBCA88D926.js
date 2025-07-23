const v0 = `
    function F1(a3, a4, a5, a6) {
        if (!new.target) { throw 'must be called with new'; }
        function f7() {
            arguments.valueOf();
            function F10(a12, a13, a14, a15) {
                if (!new.target) { throw 'must be called with new'; }
            }
            new F10(this, v0, v0, F1);
            return F1;
        }
        f7();
    }
    new F1();
    /\u{12345}/myvis;
`;
eval(v0);
gc();

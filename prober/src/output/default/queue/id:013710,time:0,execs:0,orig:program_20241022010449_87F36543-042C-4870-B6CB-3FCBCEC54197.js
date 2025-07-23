const v0 = `
    function F1(a3, a4, a5, a6) {
        if (!new.target) { throw 'must be called with new'; }
        function f7() {
            arguments.length;
            function F10(a12, a13, a14, a15) {
                if (!new.target) { throw 'must be called with new'; }
                const t7 = a12.Float16Array;
                new t7(arguments);
            }
            const v18 = new F10(this);
            return v18;
        }
        f7();
    }
    new F1();
    /\u{12345}/myvis;
`;
eval(v0);
gc();

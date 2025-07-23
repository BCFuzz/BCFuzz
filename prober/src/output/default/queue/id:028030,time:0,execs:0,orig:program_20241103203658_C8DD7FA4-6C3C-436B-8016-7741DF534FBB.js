const v0 = `
    function F1(a3, a4, a5, a6) {
        if (!new.target) { throw 'must be called with new'; }
        function f7() {
            let v9;
            try { v9 = arguments.finally(); } catch (e) {}
            return v9;
        }
        f7();
    }
    new F1(F1, v0, v0, F1);
    /\u{12345}/myvis;
`;
eval(v0);
gc();

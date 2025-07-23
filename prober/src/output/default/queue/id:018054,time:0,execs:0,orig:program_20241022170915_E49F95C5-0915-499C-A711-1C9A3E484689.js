const v0 = `
    function F1() {
        if (!new.target) { throw 'must be called with new'; }
        function f3(a4) {
            return /\u{12345}/myvis;
        }
        const o12 = {
            n(a7, a8, a9) {
                const v10 = this;
                v10.unescape(f3);
                return v0;
            },
        };
        const v13 = o12.n;
        v13(v0, v0, v13, F1, v0);
    }
    class C15 extends F1 {
    }
    new C15();
`;
eval(v0);
gc();

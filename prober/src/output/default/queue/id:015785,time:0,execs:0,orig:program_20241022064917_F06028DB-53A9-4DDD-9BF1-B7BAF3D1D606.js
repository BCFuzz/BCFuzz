const v0 = `
    /\u{12345}/myvis;
    function F2() {
        if (!new.target) { throw 'must be called with new'; }
        function f4(a5) {
            const o9 = {
                get b() {
                    0 % 0;
                    return this;
                },
            };
            return a5;
        }
        const o16 = {
            n(a11, a12, a13) {
                const v14 = this;
                v14.unescape(f4);
                return this;
            },
        };
        const t20 = o16.n;
        t20();
    }
    class C19 extends F2 {
    }
    new C19();
`;
eval(v0);
gc();

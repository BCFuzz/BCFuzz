const v0 = `
    function f1(a2) {
        const o6 = {
            get b() {
                0 % 0;
                return 0;
            },
        };
        return o6;
    }
    const o12 = {
        n(a8, a9, a10) {
            try { this.decodeURI(a9); } catch (e) {}
            return f1;
        },
    };
    const t16 = o12.n;
    t16(o12, f1);
    /\u{12345}/dgisu;
`;
eval(v0);
gc();

const v0 = `
    const v1 = /\u{12345}/myvis;
    function F2(a4, a5, a6, a7) {
        if (!new.target) { throw 'must be called with new'; }
        async function* f8(a9, a10) {
            this[new.target];
            return a7;
        }
        f8(a5, v0);
    }
    new F2(v0, v0, v1, F2);
`;
eval(v0);
gc();

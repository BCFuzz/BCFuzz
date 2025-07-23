const v0 = `
    /\u{12345}/myvis;
    function F2(a4, a5, a6, a7) {
        if (!new.target) { throw 'must be called with new'; }
        async function* f8(a9, a10) {
        }
        f8(a5, a5);
    }
    new F2();
`;
eval(v0);
gc();

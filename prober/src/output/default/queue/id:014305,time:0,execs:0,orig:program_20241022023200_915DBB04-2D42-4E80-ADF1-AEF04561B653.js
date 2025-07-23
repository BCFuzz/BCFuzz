const v0 = `
    /\u{12345}/myvis;
    function F2() {
        if (!new.target) { throw 'must be called with new'; }
        return;
    }
    new F2();
`;
eval(v0);
gc();

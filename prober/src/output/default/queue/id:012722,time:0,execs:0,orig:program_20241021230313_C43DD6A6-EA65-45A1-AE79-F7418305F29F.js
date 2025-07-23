const v0 = `
    const v1 = [v0,v0];
    function F2(a4, a5) {
        if (!new.target) { throw 'must be called with new'; }
        a5.search(v1);
    }
    new F2(v0, v0);
    /\u{12345}/myvis;
`;
eval(v0);
gc();

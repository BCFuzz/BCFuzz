const v0 = `
    /\u{12345}/myvis;
    function F3(a5, a6) {
        if (!new.target) { throw 'must be called with new'; }
        ("NEGATIVE_INFINITY")?.constructor;
    }
`;
eval(v0);
gc();

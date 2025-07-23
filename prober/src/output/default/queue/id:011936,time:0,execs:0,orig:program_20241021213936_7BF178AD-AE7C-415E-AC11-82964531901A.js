const v2 = `
    function F3(a5, a6, a7, a8) {
        if (!new.target) { throw 'must be called with new'; }
        const t3 = undefined.constructor;
        t3(undefined, null);
    }
    /\u{12345}/myvis;
`;
eval(v2);
gc();

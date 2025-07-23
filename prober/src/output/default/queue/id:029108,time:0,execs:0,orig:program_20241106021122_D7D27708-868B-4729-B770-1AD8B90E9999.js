const v1 = `
    /\u{12345}/myvis;
    function F3(a5, a6, a7, a8) {
        if (!new.target) { throw 'must be called with new'; }
        class C9 {
        }
        const v13 = a8 + URIError(URIError(C9));
        const v14 = Float64Array.constructor;
        try { v14(v13); } catch (e) {}
        for (let i18 = 0, i19 = 10; i18 !== i19; i19--) {
        }
    }
    new F3();
    for (let i29 = 0, i30 = 10; i29 < i30; i30--) {
    }
`;
eval(v1);
gc();

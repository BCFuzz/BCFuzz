const v0 = `
    /\u{12345}/myvis;
    function F2(a4, a5, a6, a7) {
        if (!new.target) { throw 'must be called with new'; }
        class C8 {
        }
        const v11 = URIError(URIError(C8));
        const v12 = v11 + v11;
        class C13 {
        }
        const v14 = C13.constructor;
        try { v14(v12); } catch (e) {}
        for (let i18 = 0, i19 = 10; i18 !== i19; i19--) {
        }
    }
    new F2();
    for (let i29 = 0, i30 = 10; i29 < i30; i30--) {
    }
`;
eval(v0);
gc();

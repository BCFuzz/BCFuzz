const v0 = `
    class C1 {
    }
    const v2 = new C1();
    const v3 = v2.constructor;
    function F4(a6, a7, a8, a9) {
        if (!new.target) { throw 'must be called with new'; }
    }
    const v10 = new F4();
    const v11 = /hNPa*b|c/myiu;
    v11["compile"](v3);
    v10 + v11;
    /\u{12345}/myvis;
`;
eval(v0);
gc();

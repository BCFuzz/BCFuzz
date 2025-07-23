const v0 = `
    class C1 {
    }
    function f2() {
    }
    const v3 = new C1();
    v3.constructor = f2;
    const v4 = v3.constructor;
    function F5(a7, a8, a9, a10) {
        if (!new.target) { throw 'must be called with new'; }
    }
    const v11 = new F5();
    const v12 = /hNPa*b|c/myiu;
    v12["compile"](v4);
    v11 + v12;
    /\u{12345}/myvis;
`;
eval(v0);
gc();

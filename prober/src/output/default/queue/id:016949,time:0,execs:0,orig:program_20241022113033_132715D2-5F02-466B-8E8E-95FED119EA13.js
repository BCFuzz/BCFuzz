const v0 = `
    class C1 {
    }
    function f2() {
        /xyz{0,1}/myg;
        /\u{12345}/myvis;
        return C1;
    }
    const v5 = new C1();
    v5.constructor = f2;
    const v6 = v5.constructor;
    /hNPa*b|c/myiu["compile"](v6);
    for (let i12 = 10, i13 = 10; -13369 !== i13; i13--) {
    }
`;
eval(v0);
gc();

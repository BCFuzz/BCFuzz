const v1 = `
    function f2(a3) {
        return f2;
    }
    class C4 extends f2 {
        d = 2.220446049250313e-16;
    }
    /\u{12345}/myvis;
`;
eval(v1);
gc();

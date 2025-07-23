const v2 = `
    function f3() {
        return 195;
    }
    const v4 = f3();
    class C5 extends f3 {
        constructor(a7, a8) {
            super();
            let v9 = ~v4;
            v9 >>>= 1073741825;
            super.d;
            super.e;
        }
    }
    new C5();
    if (1073741825 > 195) {
    }
`;
eval(v2);
gc();

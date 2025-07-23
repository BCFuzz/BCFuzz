const v0 = `
    function f1() {
        return f1;
    }
    const v2 = f1();
    class C3 extends f1 {
        constructor(a5, a6) {
            super();
            for (let v7 = 0; v7 < 5; v7++) {
            }
            ("iterator").replace(a5);
            -26944 + ("number" ^ undefined);
        }
    }
    new C3(v2);
    /\u{12345}/myvis;
`;
eval(v0);
gc();

const v0 = `
    function f1() {
        return f1;
    }
    const v2 = f1();
    let v3 = f1();
    const v4 = f1();
    class C5 extends f1 {
        constructor(a7, a8) {
            super();
            let v9 = ~v3;
            --v3;
            let v11 = --v9;
            v11--;
        }
    }
    const v13 = new C5(v4, v0);
    new C5(v4, v2, v13, C5, f1, v13, v13, v3);
    const v16 = new Uint8Array(C5, v3, v3);
    for (const v18 in v16) {
        -6 >>> v18;
    }
    /\u{12345}/myvis;
`;
eval(v0);
gc();

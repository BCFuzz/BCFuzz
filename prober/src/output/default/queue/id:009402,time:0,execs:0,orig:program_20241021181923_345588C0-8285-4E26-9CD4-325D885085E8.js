const v0 = `
    class C1 {
    }
    class C2 extends C1 {
        constructor(a4, a5) {
            super();
        }
        static [C1];
        g;
        /*
        constructor(a7, a8, a9, a10) {
        }
        */
    }
    new C2(v0, v0, v0, v0);
    /\u{12345}/myvis;
`;
eval(v0);
gc();

const v0 = `
    class C1 {
        constructor(a3, a4, a5) {
            class C6 {
                static [C6];
            }
        }
    }
    /\u{12345}/myvis;
`;
eval(v0);
gc();

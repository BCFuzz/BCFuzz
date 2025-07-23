const v0 = `
    class C1 {
        constructor(a3, a4, a5, a6) {
            function* f7(a8, a9, a10, a11) {
                return a11;
            }
        }
    }
    /\u{12345}/myvis;
`;
eval(v0);
gc();

const v0 = `
    /\u{12345}/myvis;
    class C2 {
        static #e = C2;
    }
`;
eval(v0);
gc();

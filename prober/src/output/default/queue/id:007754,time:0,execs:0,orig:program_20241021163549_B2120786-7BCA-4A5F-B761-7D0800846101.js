const v0 = `
    const v1 = /\u{12345}/myvis;
    class C2 {
        static [v1];
    }
`;
eval(v0);
gc();

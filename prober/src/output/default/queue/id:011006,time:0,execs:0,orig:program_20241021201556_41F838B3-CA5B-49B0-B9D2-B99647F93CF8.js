const v0 = `
    class C2 {
        constructor(a4, a5) {
            let v7 = gc();
            [...v7] = "-13";
            /\u{12345}/myvis;
        }
    }
`;
eval(v0);
gc();

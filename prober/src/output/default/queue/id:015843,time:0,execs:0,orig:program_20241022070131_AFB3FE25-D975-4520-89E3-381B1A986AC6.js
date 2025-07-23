const v0 = `
    /\u{12345}/myvis;
    class C2 {
        valueOf(a4, a5) {
            const v6 = (a7, a8) => {
                return a7;
            };
        }
    }
`;
eval(v0);
gc();

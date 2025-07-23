const v0 = `
    class C1 {
        static {
            for (let i4 = 0;
                (() => {
                    const v6 = i4 < 1;
                    v6 || v6;
                    return v6;
                })();
                i4++) {
            }
        }
    }
    /\u{12345}/myvis;
`;
eval(v0);
gc();

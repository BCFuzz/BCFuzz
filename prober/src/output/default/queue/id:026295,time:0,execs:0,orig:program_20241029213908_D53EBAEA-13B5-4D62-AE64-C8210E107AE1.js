const v0 = `
    class C1 {
        static {
            for (let v3 = 0; v3 < 5; v3++) {
                const o9 = {
                    valueOf(a5, a6, a7) {
                        return /\u{12345}/myvis;
                    },
                };
                continue;
            }
        }
    }
`;
eval(v0);
gc();

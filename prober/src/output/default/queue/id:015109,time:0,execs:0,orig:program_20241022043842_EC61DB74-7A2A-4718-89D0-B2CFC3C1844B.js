const v0 = `
    class C1 {
        static {
            for (let i6 = (() => {
                    super[257];
                    return 0;
                })();
                i6 < 1;
                i6++) {
            }
        }
    }
    /\u{12345}/myvis;
`;
eval(v0);
gc();

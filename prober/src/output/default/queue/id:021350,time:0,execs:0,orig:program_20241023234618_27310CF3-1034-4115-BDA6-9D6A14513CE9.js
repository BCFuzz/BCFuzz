const v0 = `
    const v3 = new Uint8Array(/\u{12345}/myvis);
    class C4 extends Uint8Array {
        static {
            const v6 = C4 + v3;
            for (let i9 = 0, i10 = 10;
                (() => {
                    --i10;
                    const v12 = i9 < i10;
                    super.h = v6;
                    return v12;
                })();
                ) {
            }
        }
    }
`;
eval(v0);
gc();

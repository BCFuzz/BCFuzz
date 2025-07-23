const v0 = `
    for (let i3 = 0, i4 = 10;
        (() => {
            class C6 extends Date {
                constructor(a8, a9) {
                    super();
                    gc();
                }
            }
            new C6(i4, v0);
            return i3 < i4;
        })();
        i4--) {
    }
    /\u{12345}/myvis;
`;
eval(v0);
gc();

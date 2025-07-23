const v0 = [0.5828539430378197,-1000000000000.0,-5.0,1.6322358793216148e+308,2.220446049250313e-16];
const v1 = `
    for (let i4 = 0, i5 = 10; i4 < i5; i5--) {
    }
    /\u{12345}/myvis;
    for (let i15 = 0, i16 = 10;
        (() => {
            i16--;
            class C18 {
                constructor(a20) {
                    try {
                        const v21 = v0;
                        return v21.Intl;
                    } catch(e23) {
                    }
                }
            }
            new C18(C18);
            return i15 < i16;
        })();
        ) {
    }
`;
eval(v1);
gc();

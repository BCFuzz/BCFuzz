const v0 = [2.220446049250313e-16,0.08164666097937245,313223.4064163924,1.7976931348623157e+308,-4.769735036946859e+307,1.5731484334060764e+308,0.3924844905401743];
const v1 = `
    const v2 = /\u{12345}/myvis;
    for (let v3 = 0; v3 < 5; v3++) {
        for (let i6 = 0, i7 = 10;
            (() => {
                i7--;
                class C9 {
                    #toString(a11) {
                    }
                    constructor(a13) {
                        try {
                        } catch(e14) {
                            const v16 = [v0,v0,v0];
                            eval();
                            Reflect.apply(v0.slice, v2, v16);
                        }
                    }
                }
                new C9(v3);
                return i6 < i7;
            })();
            ) {
        }
    }
`;
eval(v1);
gc();
